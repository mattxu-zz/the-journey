import { MonsterType, EquipmentType } from "../../definitions";
import { MonsterEquipmentMapping } from "./definition";
import { Dictionary } from "underscore";

const monsterEquipmentDropRateMappings: Dictionary<MonsterEquipmentMapping> = {
	[MonsterType.Wolf]: {
		equipments: [
			{
				type: EquipmentType.Sword,
				rate: 0.3
			},
			{
				type: EquipmentType.Shield,
				rate: 0.3
			}
		]
	},
	[MonsterType.Bat]: {
		equipments: [
			{
				type: EquipmentType.Dagger,
				rate: 0.4
			},
			{
				type: EquipmentType.Axe,
				rate: 0.3
			},
		]
	},
	[MonsterType.WildBoar]: {
		equipments: [
			{
				type: EquipmentType.Dagger,
				rate: 0.4
			},
			{
				type: EquipmentType.Axe,
				rate: 0.3
			},
			{
				type: EquipmentType.LightArmor,
				rate: 0.25
			},
			{
				type: EquipmentType.Vest,
				rate: 0.25
			}
		]
	},
	[MonsterType.Elephant]: {
		equipments: [
			{
				type: EquipmentType.Sword,
				rate: 0.3
			},
			{
				type: EquipmentType.Shield,
				rate: 0.3
			},
			{
				type: EquipmentType.HeavyArmor,
				rate: 0.25
			}
		]
	},
	[MonsterType.Tiger]: {
		equipments: [
			{
				type: EquipmentType.TigerDagger,
				rate: 0.25
			},
			{
				type: EquipmentType.TigerAxe,
				rate: 0.2
			},
			{
				type: EquipmentType.BeatKingHeavyArmor,
				rate: 0.1
			},
			{
				type: EquipmentType.BeatKingLightArmor,
				rate: 0.1
			},
			{
				type: EquipmentType.BeatKingVest,
				rate: 0.1
			},
		]
	},
	[MonsterType.Lion]: {
		equipments: [
			{
				type: EquipmentType.LionShield,
				rate: 0.2
			},
			{
				type: EquipmentType.HeavyArmor,
				rate: 0.2
			},
			{
				type: EquipmentType.BeatKingHeavyArmor,
				rate: 0.1
			},
			{
				type: EquipmentType.BeatKingLightArmor,
				rate: 0.1
			},
			{
				type: EquipmentType.BeatKingVest,
				rate: 0.1
			},
		]
	},
	[MonsterType.KingOfBeast]: {
		equipments: [
			{
				type: EquipmentType.BeatKingHeavyArmor,
				rate: 0.5
			},
			{
				type: EquipmentType.BeatKingLightArmor,
				rate: 0.5
			},
			{
				type: EquipmentType.BeatKingVest,
				rate: 0.5
			},
		]
	},
}

export default monsterEquipmentDropRateMappings