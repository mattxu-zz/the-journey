import BaseNegativeSkill from "../../../base-negative";
import { Skill } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";

@CharacterSkillRegister(SkillType.HealthTraining, RoleType.Knight, 10)
export default class HealthTraining extends BaseNegativeSkill implements Skill {
    type = SkillType.HealthTraining;
    name = "生命训练";
    increaseRate = 100;
    hp = 100;

    getDescription(level: number) {
        return `骑士专注于生命训练，提升${this.getValueBySkillLevel(this.hp, level)}点生命值`;
    }
}