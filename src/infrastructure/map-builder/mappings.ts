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
	},
	{
		level: 6,
		monsters: [MonsterType.Bandit, MonsterType.BanditLeader]
	},
	{
		level: 7,
		monsters: [MonsterType.BanditLeader, MonsterType.Soldier]
	},
	{
		level: 8,
		monsters: [MonsterType.DBandit, MonsterType.Soldier]
	},
	{
		level: 9,
		monsters: [MonsterType.DBandit, MonsterType.General, MonsterType.Soldier]
	},
	{
		level: 10,
		monsters: [MonsterType.DBandit, MonsterType.General]
	}
]

const mapBossLevelMappings = [
	{
		level: 5,
		monsters: [MonsterType.KingOfBeast]
	},
	{
		level: 10,
		monsters: [MonsterType.DGeneral]
	}
]

const mappings = {
	mapMonsterLevelMappings,
	mapBossLevelMappings
}

export default mappings;