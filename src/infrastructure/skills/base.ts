import { Skill, SkillCategory, UseSkillResult } from "./definition";
import { Status, SkillType } from "../../definitions";

export class BaseSkill implements Skill {
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
        return Number((data * Math.pow(this.increaseRate, level-1)).toFixed(2));
    }

    getHpCost(level: number): number {
        return Math.round(this.getValueBySkillLevel(this.hpCost, level));
    }
    getMpCost(level: number): number {
        return Math.round(this.getValueBySkillLevel(this.mpCost, level));
    }
}