import { BattleState, BattleActionType, BattleReportType, BattleDamage, DamageType } from "../definition";
import { Action } from "redux";
import { RolesFactory } from "../../infrastructure/roles";
import MonstersFactory from "../../infrastructure/monsters";
import { RoleActions } from "../../infrastructure/roles/definition";
import { MonsterActions } from "../../infrastructure/monsters/definition";
import { simpleDeepClone, guid } from "../../utils";
import EquipmentFactory from "../../infrastructure/equipments";
import StatisticsCenter from "../../infrastructure/statistics";
import { calculateDefendPercent } from "../../utils/defend";
import { judge } from "../../utils/percentage";
import { Skill } from "../../infrastructure/skills/definition";
import { SkillMap } from "../../definitions";
export class BattleAction implements Action {
	type: BattleActionType | undefined;
	character: undefined;
	monster: undefined;
	mapItemId: undefined;
	skill: Skill | undefined;
	skillMap: SkillMap | undefined;
}
const storageState = JSON.parse(localStorage.getItem('state') || '') && JSON.parse(localStorage.getItem('state') || '').battle;

const defaultBattleState: BattleState = {
	character: undefined,
	monster: undefined,
	success: false,
	mapItemId: undefined,
	reports: [],
	currentDamage: undefined,
	currentMonsterDamage: undefined,
	lock: false
}

export function battle(state: BattleState = storageState ? storageState : defaultBattleState, action: BattleAction): BattleState {
	switch (action.type) {
		case BattleActionType.INIT_BATTLE:
			return {
				...state,
				character: action.character,
				monster: action.monster,
				success: false,
				mapItemId: action.mapItemId,
				reports: [],
				currentDamage: undefined,
				currentMonsterDamage: undefined,
				lock: false,
			}
		case BattleActionType.CHARACTER_ATTACK: {
			if (!state.character || !state.monster) {
				return state;
			}
			if (state.character.Status.HP <= 0) {
				return state;
			}
			let role = RolesFactory.getRole(state.character.Type);
			let monster = MonstersFactory.getMonster(state.monster.Type);

			let currentDamage: BattleDamage = {
				type: DamageType.Common,
				value: 0
			}
			if (role && monster && state.reports) {
				role = role as RoleActions;
				monster = monster as MonsterActions;
				let damage = role.getDamage(state.character.Status);
				let defend = monster.getDefend(state.monster.Status);
				let newReports = simpleDeepClone(state.reports);
				let differ = 0;
				// 触发闪避
				if (judge(state.monster.Status.Dodge)) {
					newReports.unshift({
						id: guid(),
						type: BattleReportType.monsterDodge,
						content: `敌方闪避了攻击！`,
						time: new Date()
					})
				} else {
					// 触发物品效果
					const wearing = state.character.Wearing;
					let triggeredEquips: any[] = [];
					Object.values(wearing).forEach((wearingEquip) => {
						if (wearingEquip && state.character) {
							if (triggeredEquips.includes(wearingEquip.Id)) {
								return;
							}
							const actions = EquipmentFactory.getEquipment(wearingEquip.Type);
							if (actions) {
								const effect = actions.triggerAttackEffect(damage, defend, state.character.Status);
								triggeredEquips.push(wearingEquip.Id);
								({ damage, defend } = effect);
							}
						}
					})
					// 触发暴击
					if (judge(state.character.Status.Critical)) {
						damage *= state.character.Status.CriticalDamage;
						newReports.unshift({
							id: guid(),
							type: BattleReportType.characterCritical,
							content: `玩家触发暴击！`,
							time: new Date()
						})
						currentDamage.type = DamageType.Critical;
					}

					const defendPercent = calculateDefendPercent(defend);
					differ = Math.round(damage * defendPercent);
					differ = differ > 0 ? differ : 1;

					// 触发吸血
					if (judge(state.character.Status.Bloodsucking)) {
						const blood = Math.round(differ * state.character.Status.BloodsuckingRate);
						state.character.Status.HP += blood;
						if (state.character.Status.HP > state.character.Status.MaxHP) {
							state.character.Status.HP = state.character.Status.MaxHP;
						}
						newReports.unshift({
							id: guid(),
							type: BattleReportType.characterSuck,
							content: `玩家触发吸血，吸取了${blood}点HP！`,
							time: new Date()
						})
						currentDamage.type = DamageType.Bloodsucking;
					}

				}


				StatisticsCenter.accountDamage(differ);

				state.monster.Status.HP -= differ;

				if (state.monster.Status.HP <= 0) {
					state.success = true;
					state.monster.Status.HP = 0;
					StatisticsCenter.killMonster();
				}

				newReports.unshift({
					id: guid(),
					type: BattleReportType.characterAttack,
					content: `玩家造成了${differ}点伤害, 敌方剩余血量${state.monster.Status.HP}`,
					time: new Date()
				})
				currentDamage.value = differ;
				return {
					...state,
					character: simpleDeepClone(state.character),
					monster: simpleDeepClone(state.monster),
					reports: newReports,
					currentDamage,
					currentMonsterDamage: undefined
				}
			}
			return state;
		}
		case BattleActionType.MONSTER_ATTACK: {
			if (!state.character || !state.monster) {
				return state;
			}
			if (state.monster.Status.HP <= 0) {
				return state;
			}
			let role = RolesFactory.getRole(state.character.Type);
			let monster = MonstersFactory.getMonster(state.monster.Type);
			let currentMonsterDamage: BattleDamage = {
				type: DamageType.Common,
				value: 0
			}
			if (role && monster && state.reports) {
				role = role as RoleActions;
				monster = monster as MonsterActions;
				let damage = monster.getDamage(state.monster.Status);
				let defend = role.getDefend(state.character.Status);
				let newReports = simpleDeepClone(state.reports);
				let differ = 0;
				// 触发闪避
				if (judge(state.character.Status.Dodge)) {
					newReports.unshift({
						id: guid(),
						type: BattleReportType.characterDodge,
						content: `玩家闪避了攻击！`,
						time: new Date()
					})
				} else {
					// 触发物品效果
					const wearing = state.character.Wearing;
					Object.values(wearing).forEach((wearingEquip) => {
						if (wearingEquip && state.character) {
							const actions = EquipmentFactory.getEquipment(wearingEquip.Type);
							if (actions) {
								const effect = actions.triggerDefendEffect(damage, defend, state.character.Status);
								({ damage, defend } = effect);
							}
						}
					})

					// 触发暴击
					if (judge(state.monster.Status.Critical)) {
						damage *= state.monster.Status.CriticalDamage;
						newReports.unshift({
							id: guid(),
							type: BattleReportType.monsterCritical,
							content: `敌方触发暴击！`,
							time: new Date()
						})
						currentMonsterDamage.type = DamageType.Critical;
					}

					const defendPercent = calculateDefendPercent(defend);
					differ = Math.round(damage * defendPercent);
					differ = differ > 0 ? differ : 1;

					// 触发吸血
					if (judge(state.monster.Status.Bloodsucking)) {
						const blood = Math.round(differ * state.monster.Status.BloodsuckingRate);
						state.monster.Status.HP += blood;
						if (state.monster.Status.HP > state.monster.Status.MaxHP) {
							state.monster.Status.HP = state.monster.Status.MaxHP;
						}
						newReports.unshift({
							id: guid(),
							type: BattleReportType.monsterSuck,
							content: `敌方触发吸血，吸取了${blood}点HP！`,
							time: new Date()
						})
						currentMonsterDamage.type = DamageType.Bloodsucking;
					}
				}


				StatisticsCenter.accountTakeDamage(differ);

				state.character.Status.HP -= differ;

				if (state.character.Status.HP <= 0) {
					state.character.Status.HP = 0;
				}

				newReports.unshift({
					id: guid(),
					type: BattleReportType.monsterAttack,
					content: `敌方造成了${differ}点伤害, 玩家剩余血量${state.character.Status.HP}`,
					time: new Date()
				})
				currentMonsterDamage.value = differ;
				return {
					...state,
					character: simpleDeepClone(state.character),
					reports: newReports,
					currentMonsterDamage,
					currentDamage: undefined,
					lock: false
				}
			}
			return state;
		}
		case BattleActionType.CHARACTER_USE_SKILL: {
			if (action.skill && action.skillMap && state.character && state.monster && state.reports) {
				const skill = action.skill;
				const skillMap = action.skillMap;
				const characterStatus = state.character.Status;
				const monsterStatus = state.monster.Status;
				let newReports = simpleDeepClone(state.reports);
				const result = skill.use(characterStatus, monsterStatus, skillMap.Level);
				if (result) {
					result.reports.forEach(report => {
						newReports.unshift(report);
					})
					if (monsterStatus.HP <= 0) {
						state.success = true;
					}
					return {
						...state,
						character: simpleDeepClone(state.character),
						reports: newReports,
						currentDamage: result.battleDamage,
						currentMonsterDamage: undefined
					}
				}
			}
			return state;
		}
		case BattleActionType.LOCK: {
			return {
				...state,
				lock: true
			}
		}
		case BattleActionType.CLEAR_BATTLE:
			return defaultBattleState;
		default:
			return state;
	}
}