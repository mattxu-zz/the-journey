import { MonsterParameter } from "./definition";
import { MonsterType } from "../../definitions";

export class BatMonsterParameter implements MonsterParameter {
	Name = '蝙蝠';
	Icon = '';
	Type = MonsterType.Bat;
	HpRange = [150, 200];
	MpRange = [50, 100];
	AttackRange = [80, 120];
	DefendRange = [50, 100];
	CriticalRange = [0, 0];
	CriticalDamageRange = [1, 1];
	DodgeRange = [0, 0];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0, 0];
	ExperienceRange = [10, 15];
	MoneyRange = [10, 15];
}

export class WolfMonsterParameter implements MonsterParameter {
	Name = '野狼';
	Icon = '';
	Type = MonsterType.Wolf;
	HpRange = [200, 250];
	MpRange = [50, 80];
	AttackRange = [50, 100];
	DefendRange = [80, 100];
	CriticalRange = [0, 0];
	CriticalDamageRange = [1, 1];
	DodgeRange = [0, 0];
	BloodsuckingRange = [0.1, 0.1];
	BloodsuckingRateRange = [0.3, 0.3];
	ExperienceRange = [8, 20];
	MoneyRange = [8, 20];
}

export class WildBoarMonsterParameter implements MonsterParameter {
	Name = '野猪';
	Icon = '';
	Type = MonsterType.WildBoar;
	HpRange = [400, 500];
	MpRange = [0, 50];
	AttackRange = [150, 200];
	DefendRange = [50, 80];
	CriticalRange = [0.1, 0.1];
	CriticalDamageRange = [1.2, 1.2];
	DodgeRange = [0, 0];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0, 0];
	ExperienceRange = [20, 30];
	MoneyRange = [20, 30];
}

export class ElephantMonsterParameter implements MonsterParameter {
	Name = '大象';
	Icon = '';
	Type = MonsterType.Elephant;
	HpRange = [900, 1000];
	MpRange = [0, 50];
	AttackRange = [120, 150];
	DefendRange = [180, 220];
	CriticalRange = [0, 0];
	CriticalDamageRange = [1, 1];
	DodgeRange = [0, 0];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0, 0];
	ExperienceRange = [40, 50];
	MoneyRange = [40, 50];
}

export class TigerMonsterParameter implements MonsterParameter {
	Name = '猛虎';
	Icon = '';
	Type = MonsterType.Tiger;
	HpRange = [800, 850];
	MpRange = [0, 50];
	AttackRange = [300, 380];
	DefendRange = [240, 280];
	CriticalRange = [0.25, 0.25];
	CriticalDamageRange = [1.5, 1.5];
	DodgeRange = [0.1, 0.1];
	BloodsuckingRange = [0.2, 0.2];
	BloodsuckingRateRange = [0.1, 0.1];
	ExperienceRange = [60, 70];
	MoneyRange = [60, 70];
}

export class LionMonsterParameter implements MonsterParameter {
	Name = '雄狮';
	Icon = '';
	Type = MonsterType.Lion;
	HpRange = [800, 900];
	MpRange = [0, 50];
	AttackRange = [350, 380];
	DefendRange = [350, 400];
	CriticalRange = [0.2, 0.2];
	CriticalDamageRange = [1.5, 1.5];
	DodgeRange = [0.1, 0.1];
	BloodsuckingRange = [0.2, 0.2];
	BloodsuckingRateRange = [0.1, 0.1];
	ExperienceRange = [70, 80];
	MoneyRange = [70, 80];
}

export class KingOfBeastMonsterParameter implements MonsterParameter {
	Name = '万兽之王';
	Icon = '';
	Type = MonsterType.KingOfBeast;
	HpRange = [3000, 3500];
	MpRange = [0, 50];
	AttackRange = [450, 500];
	DefendRange = [450, 500];
	CriticalRange = [0.25, 0.25];
	CriticalDamageRange = [2, 2];
	DodgeRange = [0.2, 0.2];
	BloodsuckingRange = [0.5, 0.5];
	BloodsuckingRateRange = [0.2, 0.2];
	ExperienceRange = [150, 180];
	MoneyRange = [200, 250];
}

export class BanditMonsterParameter implements MonsterParameter {
	Name = '山贼';
	Icon = '';
	Type = MonsterType.Bandit;
	HpRange = [1200, 1300];
	MpRange = [0, 50];
	AttackRange = [550, 580];
	DefendRange = [420, 450];
	CriticalRange = [0.1, 0.1];
	CriticalDamageRange = [1.5, 1.5];
	DodgeRange = [0.1, 0.1];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0, 0];
	ExperienceRange = [80, 90];
	MoneyRange = [80, 90];
}

export class BanditLeaderMonsterParameter implements MonsterParameter {
	Name = '山贼头目';
	Icon = '';
	Type = MonsterType.BanditLeader;
	HpRange = [1500, 1800];
	MpRange = [0, 50];
	AttackRange = [620, 650];
	DefendRange = [520, 550];
	CriticalRange = [0.15, 0.15];
	CriticalDamageRange = [1.5, 1.5];
	DodgeRange = [0.15, 0.15];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0, 0];
	ExperienceRange = [100, 110];
	MoneyRange = [100, 110];
}

export class DBanditMonsterParameter implements MonsterParameter {
	Name = '魔化山贼';
	Icon = '';
	Type = MonsterType.DBandit;
	HpRange = [2000, 2200];
	MpRange = [0, 50];
	AttackRange = [720, 750];
	DefendRange = [720, 750];
	CriticalRange = [0.2, 0.2];
	CriticalDamageRange = [1.7, 1.7];
	DodgeRange = [0.2, 0.2];
	BloodsuckingRange = [0.2, 0.2];
	BloodsuckingRateRange = [0.3, 0.3];
	ExperienceRange = [150, 160];
	MoneyRange = [150, 160];
}

export class SoldierMonsterParameter implements MonsterParameter {
	Name = '士兵';
	Icon = '';
	Type = MonsterType.DBandit;
	HpRange = [2200, 2500];
	MpRange = [0, 50];
	AttackRange = [680, 700];
	DefendRange = [780, 820];
	CriticalRange = [0.1, 0.1];
	CriticalDamageRange = [1.5, 1.5];
	DodgeRange = [0.1, 0.1];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0, 0];
	ExperienceRange = [130, 140];
	MoneyRange = [130, 140];
}

export class DSoldierMonsterParameter implements MonsterParameter {
	Name = '魔化士兵';
	Icon = '';
	Type = MonsterType.DSoldier;
	HpRange = [2800, 3200];
	MpRange = [0, 50];
	AttackRange = [780, 800];
	DefendRange = [980, 1020];
	CriticalRange = [0.1, 0.1];
	CriticalDamageRange = [1.5, 1.5];
	DodgeRange = [0.2, 0.2];
	BloodsuckingRange = [0.2, 0.2];
	BloodsuckingRateRange = [0.3, 0.3];
	ExperienceRange = [200, 210];
	MoneyRange = [200, 210];
}

export class GeneralMonsterParameter implements MonsterParameter {
	Name = '将军';
	Icon = '';
	Type = MonsterType.General;
	HpRange = [5800, 6200];
	MpRange = [0, 50];
	AttackRange = [800, 820];
	DefendRange = [1100, 1200];
	CriticalRange = [0.2, 0.2];
	CriticalDamageRange = [1.8, 1.8];
	DodgeRange = [0.25, 0.25];
	BloodsuckingRange = [0, 0];
	BloodsuckingRateRange = [0.3, 0.3];
	ExperienceRange = [250, 260];
	MoneyRange = [250, 260];
}

export class DGeneralMonsterParameter implements MonsterParameter {
	Name = '魔化将军';
	Icon = '';
	Type = MonsterType.DGeneral;
	HpRange = [10000, 11000];
	MpRange = [0, 50];
	AttackRange = [1000, 1100];
	DefendRange = [1500, 1800];
	CriticalRange = [0.2, 0.2];
	CriticalDamageRange = [2, 2];
	DodgeRange = [0.3, 0.3];
	BloodsuckingRange = [0.5, 0.5];
	BloodsuckingRateRange = [0.3, 0.3];
	ExperienceRange = [550, 560];
	MoneyRange = [550, 560];
}