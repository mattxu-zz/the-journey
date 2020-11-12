import { Skill, SkillCategory, UseSkillResult } from "./definition";
import { Status, SkillType } from "../../definitions";
import Config from '../../config';

export default class BaseSkill implements Skill {
    mpCost: number = 0;
    hpCost: number = 0;
    type!: SkillType;
    category!: SkillCategory;
    name!: string;
    increaseRate!: number;
    getDescription(level: number): string {
        throw new Error("Method not implemented.");
    }
    active(characterStatus: Status, level: number) {
        throw new Error("Method not implemented.");
    }
    use(characterStatus: Status, monsterStatus: Status, level: number): UseSkillResult | null {
        throw new Error("Method not implemented.");
    }
    destroy(characterStatus: Status, level: number) {
        throw new Error("Method not implemented.");
    }

    protected getValueBySkillLevel(data: number, level: number) {
        return Number((data + this.increaseRate * (level - 1)).toFixed(2));
    }

    protected getCostBySkillLevel(cost: number, level: number): number {
        return Number((cost * (1 + Config.skillCostGrowth * (level - 1))).toFixed(2));
    }

    getHpCost(level: number): number {
        return Math.round(this.getCostBySkillLevel(this.hpCost, level));
    }
    getMpCost(level: number): number {
        return Math.round(this.getCostBySkillLevel(this.mpCost, level));
    }
}