import { MonsterType } from "../../definitions";

const mapMonsterLevelMappings = [
	{
		level: 1,
		monsters: [MonsterType.Bat, MonsterType.Wolf]
	},
	{
		level: 2,
		monsters: [MonsterType.Wolf, MonsterType.WildBoar]
	},
	{
		level: 3,
		monsters: [MonsterType.Elephant, MonsterType.WildBoar]
	},
	{
		level: 4,
		monsters: [MonsterType.Elephant, MonsterType.Tiger, MonsterType.Lion]
	},
	{
		level: 5,
		monsters: [MonsterType.Tiger, MonsterType.Lion]
	}
]

const mapBossLevelMappings = [
	{
		level: 5,
		monsters: [MonsterType.KingOfBeasts]
	}
]

const mappings = {
	mapMonsterLevelMappings,
	mapBossLevelMappings
}

export default mappings;