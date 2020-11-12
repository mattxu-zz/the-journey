import BaseNegativeSkill from "../../../base-negative";
import { Skill } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";

@CharacterSkillRegister(SkillType.CriticalTraining2, RoleType.Assasin, 10)
export default class CriticalTraining2 extends BaseNegativeSkill implements Skill {
    type = SkillType.CriticalTraining2;
    name = "暴击训练2";
    increaseRate = 0.05;
    criticalDamage = 0.1;

    getDescription(level: number) {
        return `刺客专注于察觉敌方弱点，提升${this.getValueBySkillLevel(this.critical, level) * 100}%暴击伤害`;
    }
}