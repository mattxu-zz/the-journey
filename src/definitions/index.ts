import { SkillCategory } from "../infrastructure/skills/definition";

export interface Character {
	Id: string;
	Icon?: string;
	Type: RoleType;
	Status: Status;
	Level: number;
	Experience: number;
	ExperienceToLevelUp: number;
	StatusPoint: number;
	SkillPoint: number;
	Items: Item[];
	Equipments: Equipment[];
	Wearing: CharacterWearing;
	Money: number;
	Skills: SkillMap[];
}

export interface CharacterWearing {
	LeftHand?: Equipment;
	RightHand?: Equipment;
	Body?: Equipment;
}

export interface Event {
	Id: string;
}

export enum Gender {
	Female,
	Male
}

export interface Item {
	Id: string;
	Icon?: string;
	Type: ItemType;
	Name: string;
	Amount: number;
	Description?: string;
	Price: number;
}

export interface Equipment {
	Id: string;
	Icon?: string;
	Type: EquipmentType;
	Name: string;
	Equipped: boolean;
	Level: EquipmentLevel;
	Limit: RoleType[];
	Price: number;
}

export interface Monster {
	Id: string;
	Icon?: string;
	Status: Status;
	Type: MonsterType;
	Experience: number;
	Money: Number;
	Skills: SkillMap[];
}

export interface Status {
	Name: string;
	MaxHP: number;
	HP: number;
	MaxMP: number;
	MP: number;
	Attack: number;
	Defend: number;
	Critical: number;
	CriticalDamage: number;
	Dodge: number;
	Bloodsucking: number;
	BloodsuckingRate: number;	
}

export enum RoleType {
	Warrior = "勇士",
	Knight = "骑士",
	Assasin = "刺客"
}

export enum MonsterType {
	Bat = "蝙蝠",
	Wolf = "野狼",
	WildBoar = "野猪",
	Elephant = "大象",
	Tiger = "猛虎",
	Lion = "雄狮",
	KingOfBeast = "万兽之王",
	Bandit = '山贼',
	BanditLeader = '山贼头目',
	DBandit = '魔化山贼',
	Soldier = '士兵',
	DSoldier = '魔化士兵',
	General = '将军',
	DGeneral = '魔化将军',
}

export enum ItemType {
	Hemostasis = "止血草",
	GoodHemostasis = "好止血草",
	PerfectHemostasis = "完美止血草",
	MpPotion = "回蓝药水",
	GoodMpPotion = "好回蓝药水",
	PerfectMpPotion = "完美回蓝药水",
	AttackTreasure = '力量果',
	GodAttackTreasure = '力量神果',
	SantaAttackTreasure = '力量圣果',
	DefendTreasure = '防御果',
	GodDefendTreasure = '防御神果',
	SantaDefendTreasure = '防御圣果',
}

export enum EquipmentType {
	Sword = "长剑",
	Dagger = "匕首",
	TigerDagger = "猛虎匕",
	Axe = "长斧",
	TigerAxe = "猛虎斧",
	Shield = "盾牌",
	LionShield = "雄狮盾",
	HeavyArmor = "重甲",
	BeatKingHeavyArmor = "兽王重甲",
	LightArmor = "轻甲",
	BeatKingLightArmor = "兽王轻甲",
	Vest = "背心",
	BeatKingVest = "兽王背心",
}

export enum EquipmentPlace {
	LeftHand = "左手",
	RightHand = "右手",
	DoubleHand = "双手",
	Body = "身体"
}


export enum EquipmentLevel {
	Common = "普通",
	Good = "优秀",
	Rare = "稀有",
	God = "神级",
	Legend = "史诗"
}

export interface SkillMap {
	Type: SkillType,
	Category: SkillCategory,
	Level: number,
}

export enum SkillType {
	CriticalTraining = "暴击训练",
	CriticalTraining2 = "暴击训练2",
	QuickHit = "闪电一击",
	BackHit = "背刺",
	DefendTraining = "防御训练",
	HealthTraining = "生命训练",
	CalmHit = "沉稳一击",
	ShieldHit = "盾牌打击",
	BloodsuckingTraining = "嗜血训练",
	BloodsuckingTraining2 = "嗜血训练2",
	BraveHit = "勇猛一击",
	BloodDrinkHit = "饮血斩",
}

export interface User {
	Id: string;
	Name: string;
	Gender: Gender;
}

export interface Weapon {
	Id: string;
}
