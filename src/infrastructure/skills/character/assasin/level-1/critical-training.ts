import BaseNegativeSkill from "../../../base-negative";
import { Skill } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";

@CharacterSkillRegister(SkillType.CriticalTraining, RoleType.Assasin, 1)
export default class CriticalTraining extends BaseNegativeSkill implements Skill {
    type = SkillType.CriticalTraining;
    name = "暴击训练";
    increaseRate = 0.03;
    critical = 0.03;

    getDescription(level: number) {
        return `刺客专注于察觉敌方弱点，提升${this.getValueBySkillLevel(this.critical, level) * 100}%暴击率`;
    }
}