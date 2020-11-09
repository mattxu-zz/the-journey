import { Status, SkillType } from "../../definitions";
import { BattleReport, BattleDamage } from "../../redux/definition";

export enum SkillCategory {
    Positive,
    Negative
}

export interface Skill {
    type: SkillType,
    category: SkillCategory,
    name: string,
    mpCost: number,
    hpCost: number,
    getDescription(level: number): string,
    active(characterStatus: Status, level: number): void,
    use(characterStatus: Status, monsterStatus: Status, level: number): UseSkillResult | null,
    destroy(characterStatus: Status, level: number): void,
    getHpCost(level: number): number,
    getMpCost(level: number): number
}

export interface UseSkillResult {
    battleDamage: BattleDamage,
    reports: BattleReport[]
}