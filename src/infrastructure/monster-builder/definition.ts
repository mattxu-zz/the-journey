import { MonsterType } from "../../definitions";
import { Skill } from "../skills/definition";

export interface MonsterParameter {
    Name: string,
    Icon?: string,
    Type: MonsterType,
    HpRange: number[],
    MpRange: number[],
    AttackRange: number[],
    DefendRange: number[],
    CriticalRange: number[],
    CriticalDamageRange: number[],
    DodgeRange: number[],
    BloodsuckingRange: number[],
    BloodsuckingRateRange: number[],
		ExperienceRange: number[],
    AllSkills?: Skill[];
    MoneyRange: number[];
}