import { BaseNegativeSkill } from "../../../base-negative";
import { Skill } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";

@CharacterSkillRegister(SkillType.DefendTraining, RoleType.Knight, 1)
export class DefendTraining extends BaseNegativeSkill implements Skill {
    type = SkillType.DefendTraining;
    name = "防御训练";
    increaseRate = 2;
    defend = 100;

    getDescription(level: number) {
        return `骑士专注于防御，提升${this.getValueBySkillLevel(this.defend, level)}点防御`;
    }
}