import { ItemType, MonsterType } from "../../definitions";
import { MonsterItemMapping } from "./definition";
import { Dictionary } from "underscore";

const monsterItemDropRateMappings: Dictionary<MonsterItemMapping> = {
	[MonsterType.Wolf]: {
		items: [
			{
				type: ItemType.Hemostasis,
				rate: 0.1
			},
			{
				type: ItemType.DefendTreasure,
				rate: 0.1
			}
		]
	},
	[MonsterType.Bat]: {
		items: [
			{
				type: ItemType.Hemostasis,
				rate: 0.2
			},
			{
				type: ItemType.AttackTreasure,
				rate: 0.1
			}
		]
	},
	[MonsterType.WildBoar]: {
		items: [
			{
				type: ItemType.Hemostasis,
				rate: 0.3
			},
			{
				type: ItemType.GoodHemostasis,
				rate: 0.2
			},
			{
				type: ItemType.AttackTreasure,
				rate: 0.2
			},
			{
				type: ItemType.GodAttackTreasure,
				rate: 0.1
			}
		]
	},
	[MonsterType.Elephant]: {
		items: [
			{
				type: ItemType.GoodHemostasis,
				rate: 0.3
			},
			{
				type: ItemType.PerfectHemostasis,
				rate: 0.15
			},
			{
				type: ItemType.DefendTreasure,
				rate: 0.2
			},
			{
				type: ItemType.GodDefendTreasure,
				rate: 0.1
			}
		]
	},
	[MonsterType.Tiger]: {
		items: [
			{
				type: ItemType.GoodHemostasis,
				rate: 0.5
			},
			{
				type: ItemType.PerfectHemostasis,
				rate: 0.2
			},
			{
				type: ItemType.AttackTreasure,
				rate: 0.3
			},
			{
				type: ItemType.GodAttackTreasure,
				rate: 0.2
			}
		]
	},
	[MonsterType.Lion]: {
		items: [
			{
				type: ItemType.GoodHemostasis,
				rate: 0.5
			},
			{
				type: ItemType.PerfectHemostasis,
				rate: 0.2
			},
			{
				type: ItemType.DefendTreasure,
				rate: 0.3
			},
			{
				type: ItemType.GodDefendTreasure,
				rate: 0.2
			}
		]
	},
}

export default monsterItemDropRateMappings