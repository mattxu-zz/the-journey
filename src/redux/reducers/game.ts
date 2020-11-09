import { GameActionType, GameState } from "../definition";
import { Status, MonsterType, Item, Equipment, EquipmentPlace, Character, CharacterWearing } from "../../definitions";
import { Action } from "redux";
import { MapBuilder } from "../../infrastructure/map-builder/builder";
import { simpleDeepClone } from "../../utils";
import config from "../../config";
import MessageService from "../../utils/message";
import { ItemBuilder } from "../../infrastructure/item-builder/builder";
import { ItemsFactory } from "../../infrastructure/items";
import { EquipmentBuild } from "../../infrastructure/equipment-build/builder";
import EquipmentFactory from "../../infrastructure/equipments";
import { MapType } from "../../infrastructure/map-builder/definition";
import { Store } from "../../infrastructure/store-builder/definition";
import { Skill, SkillCategory } from "../../infrastructure/skills/definition";

export class GameAction implements Action {
	type: GameActionType | undefined;
	character: undefined;
	mapItemId: undefined;
	exp: number | undefined;
	status: Status | undefined;
	monsterType: MonsterType | undefined;
	item: Item | undefined;
	equipment: Equipment | undefined;
	place: EquipmentPlace | undefined;
	money: number | undefined;
	store: Store | undefined;
	skill: Skill | undefined;
}

const storageState = JSON.parse(localStorage.getItem('state') || '') && JSON.parse(localStorage.getItem('state') || '').game;

const defaultGameState: GameState = {
	character: undefined,
	map: undefined,
	mapLocked: false,
	success: false,
	characterStatusDrawerVisible: false,
}

function takeOffEquipment(equipment: Equipment | undefined, character: Character, callAction = true) {
	if (!equipment) {
		return;
	}

	if (callAction) {
		const actions = EquipmentFactory.getEquipment(equipment.Type);
		actions?.takeOff(character.Status);
	}
	
	const match = character.Equipments.find(e => e.Id === equipment.Id);
	if (match) {
		match.Equipped = false;
	}
}

function isDoubleHand(equipment: Equipment): boolean {
	const actions = EquipmentFactory.getEquipment(equipment.Type);
	return !!actions?.places.find(p => p === EquipmentPlace.DoubleHand);
}

function isWearingDoubleHand(wearing: CharacterWearing): boolean {
	return !!(wearing.LeftHand && wearing.RightHand && (wearing.LeftHand.Id === wearing.RightHand.Id));
}

function levelUp(character: Character) {
	character.StatusPoint += config.statusPointPerLevel;
	character.Level++;
	// 每级获得一点天赋点
	// if (character.Level % 2 === 0) {
		character.SkillPoint ++;
	// }
	character.Experience = Math.round(character.Experience - character.ExperienceToLevelUp);
	character.ExperienceToLevelUp = Math.round(character.ExperienceToLevelUp * config.levelUpExperienceRate);
	character.Status.MaxHP = Math.round(character.Status.MaxHP += config.levelUpStatusImproveNumber[character.Type].HP);
	character.Status.MaxMP = Math.round(character.Status.MaxMP += config.levelUpStatusImproveNumber[character.Type].MP);
	character.Status.Attack = Math.round(character.Status.Attack += config.levelUpStatusImproveNumber[character.Type].Attack);
	character.Status.Defend = Math.round(character.Status.Defend += config.levelUpStatusImproveNumber[character.Type].Defend);
	character.Status.HP = character.Status.MaxHP;
	character.Status.MP = character.Status.MaxMP;
	MessageService.success(`你成功升级到了Level${character.Level}`)
}

export function game(state: GameState = storageState ? storageState: defaultGameState, action: GameAction): GameState {
	switch (action.type) {
		case GameActionType.SET_CHARACTER:
			return {
				...state,
				character: simpleDeepClone(action.character)
			}
		case GameActionType.INIT_MAP: {
			let level = 1;
			if (state.map) {
				return state;
			}
			const map = MapBuilder.build(level);
			return {
				...state,
				map: map
			}
		}
		case GameActionType.LOCK_MAP: {
			return {
				...state,
				mapLocked: true
			}
		}
		case GameActionType.UNLOCK_MAP: {
			return {
				...state,
				mapLocked: false
			}
		}
		case GameActionType.NEXT_MAP_LEVEL: {
			if (!state.map) {
				return state;
			}
			const level = state.map.Level + 1;
			try {
				const map = MapBuilder.build(level);
				return {
					...state,
					map: map
				}
			}
			// 没有更高级的地图 === 通关
			catch(e) {
				return {
					...state,
					success: true
				}
			}
			
		}
		case GameActionType.PASS_MAP_ITEM: {
			if (!state.map) {
				return state;
			}
			const item = state.map.Items.find(item => item.Id === action.mapItemId);
			if (!item) {
				return state
			}
			item.Passed = true;
			item.Show = item.Type === MapType.BossBattle ? true: false;
			return {
				...state,
				map: simpleDeepClone(state.map),
				mapLocked: false
			}
		}
		case GameActionType.GAIN_EXP: {
			if (action.exp) {
				let character = simpleDeepClone(state.character);
				if (character) {
					character.Experience += action.exp;
					// 升级
					if (character.Experience >= character.ExperienceToLevelUp) {
						levelUp(character);
					}
				}
				
				return {
					...state,
					character: character
				}
			}
			return state;
		}
		case GameActionType.GAME_OVER:
			localStorage.removeItem('state');
			return defaultGameState;
		case GameActionType.OPEN_CHARACTER_STATUS_DRAWER:
			return {
				...state,
				characterStatusDrawerVisible: true
			}
		case GameActionType.CLOSE_CHARACTER_STATUS_DRAWER:
			return {
				...state,
				characterStatusDrawerVisible: false
			}
		case GameActionType.SHOW_MAP_ITEM:
			if (!state.map) {
				return state;
			}
			const item = state.map.Items.find(item => item.Id === action.mapItemId);
			if (item) {
				item.Show = true;
			}
			return {
				...state,
				map: simpleDeepClone(state.map),
			}
		case GameActionType.SET_CHARACTER_STATUS:
			if (!action.status) {
				return state;
			}
			if (state.character) {
				state.character.Status = action.status;
			}
			return {
				...state,
				character: simpleDeepClone(state.character)
			}
		case GameActionType.USE_STATUS_POINT:
			if (state.character) {
				state.character.StatusPoint -= 1;
			}
			return {
				...state,
				character: simpleDeepClone(state.character)
			}
		case GameActionType.DROP_ITEM:
			if (action.monsterType && state.character) {
				state.character.Items = ItemBuilder.build(state.character.Items, action.monsterType);
				state.character.Equipments = EquipmentBuild.build(state.character.Equipments, action.monsterType);
				return {
					...state,
					character: simpleDeepClone(state.character)
				}
			}
			return state;
		case GameActionType.USE_ITEM:
			if (action.item && state.character) {
				const itemToUse = action.item;
				const itemActions = ItemsFactory.getItem(itemToUse.Type);
				const newCharacter = simpleDeepClone(state.character)
				itemActions?.use(newCharacter.Status);
				const items = newCharacter.Items;
				let usedItem = items.find(item => item.Type === itemToUse.Type);
				if (!usedItem) {
					return state;
				}

				usedItem.Amount > 1 ? usedItem.Amount -- : items.splice(items.indexOf(usedItem), 1);
				MessageService.success(itemActions?.getMessage() || null);
				return {
					...state,
					character: newCharacter
				}
			}
			return state;
		case GameActionType.START_NEW_GAME:
			return defaultGameState;
		case GameActionType.TAKEON_EQUIPMENT: {
			if (action.equipment && state.character) {
				const equipment = action.equipment;
				const newCharacter = simpleDeepClone(state.character);
				const wearing = newCharacter.Wearing;
				equipment.Equipped = true;
				const equipmentActions = EquipmentFactory.getEquipment(equipment.Type);
				if (equipmentActions?.places.length === 1) {
					const place = equipmentActions.places[0];
					switch (place) {
						case EquipmentPlace.Body: {
							takeOffEquipment(wearing.Body, newCharacter);
							wearing.Body = equipment;
							break;
						}
						case EquipmentPlace.RightHand: {
							if (isWearingDoubleHand(wearing)) {
								takeOffEquipment(wearing.LeftHand, newCharacter, false);
							}
							takeOffEquipment(wearing.RightHand, newCharacter);
							wearing.RightHand = equipment;
							break;
						}
						case EquipmentPlace.LeftHand: {
							if (isWearingDoubleHand(wearing)) {
								takeOffEquipment(wearing.RightHand, newCharacter, false);
							}
							takeOffEquipment(wearing.LeftHand, newCharacter);
							wearing.LeftHand = equipment;
							break;
						}
						case EquipmentPlace.DoubleHand:{
							if (isWearingDoubleHand(wearing)) {
								takeOffEquipment(wearing.LeftHand, newCharacter, false);
							} else {
								takeOffEquipment(wearing.LeftHand, newCharacter);
							}
							takeOffEquipment(wearing.RightHand, newCharacter);
							wearing.LeftHand = wearing.RightHand = equipment;
						}
					}
				} else { // 双持
					if (wearing.RightHand) {
						if (wearing.LeftHand) {
							takeOffEquipment(wearing.RightHand, newCharacter);
							wearing.RightHand = equipment;
						} else {
							takeOffEquipment(wearing.LeftHand, newCharacter);
							wearing.LeftHand = equipment;
						}
					} else {
						takeOffEquipment(wearing.RightHand, newCharacter);
						wearing.RightHand = equipment;
					}
				}

				// 更新属性

				equipmentActions?.takeOn(newCharacter.Status);

				// 更新装备穿着状态
				const match = newCharacter.Equipments.find(e => e.Id === equipment.Id)
				if (match) {
					match.Equipped = true;
				}

				return {
					...state,
					character: newCharacter
				}
			}
			return state;
		}
		case GameActionType.TAKEOFF_EQUIPMENT: {
			if(action.equipment && action.place && state.character) {
				const equipment = action.equipment;
				const place = action.place;
				const newCharacter = simpleDeepClone(state.character);
				const wearing = newCharacter.Wearing;
				switch(place) {
					case EquipmentPlace.Body: {
						wearing.Body = undefined;
						takeOffEquipment(equipment, newCharacter);
						break;
					}
					case EquipmentPlace.LeftHand: {
						if (isDoubleHand(equipment)) {
							wearing.RightHand = undefined;
							takeOffEquipment(equipment, newCharacter, false);
						}

						wearing.LeftHand = undefined;
						takeOffEquipment(equipment, newCharacter);
						break;
					}
					case EquipmentPlace.RightHand: {
						if (isDoubleHand(equipment)) {
							wearing.LeftHand = undefined;
							takeOffEquipment(equipment, newCharacter, false);
						}

						wearing.RightHand = undefined;
						takeOffEquipment(equipment, newCharacter);
						break;
					}
				}

				return {
					...state,
					character: newCharacter
				}
			}
			return state;
		}
		case GameActionType.GAIN_MONEY: {
			if(action.money && state.character) {
				state.character.Money += action.money;
				return {
					...state,
					character: simpleDeepClone(state.character)
				}
			}
			return state;
		}
		case GameActionType.SET_STORE: {
			if(action.store && state.map) {
				const map = state.map;
				const oldStore = map.Items.find(item => item.Type === MapType.Store);
				oldStore && (oldStore.Content = action.store);
				return {
					...state,
					map: simpleDeepClone(state.map)
				}
			}
			return state;
		}
		case GameActionType.USE_SKILLPOINT: {
			if(action.skill && state.character && state.character.SkillPoint > 0) {
				const newSkill = action.skill;
				const skillMaps = state.character.Skills;
				const skillMapExist = skillMaps.find(s => s.Type === newSkill.type);
				let level = 1;
				if (skillMapExist) {
					level = ++skillMapExist.Level;
				} else {
					skillMaps.push({
						Level: level,
						Type: newSkill.type,
						Category: newSkill.category,
					})
				}

				if (newSkill.category === SkillCategory.Negative) {
					newSkill.active(state.character.Status, level);
				}

				state.character.SkillPoint --;

				return {
					...state,
					character: simpleDeepClone(state.character)
				}
			}
			return state;
		}
		default:
			return state;
	}
}