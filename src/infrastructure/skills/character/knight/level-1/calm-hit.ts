import { Skill, SkillCategory } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";
import BasePositiveSkill from "../../../base-positive";

@CharacterSkillRegister(SkillType.CalmHit, RoleType.Knight, 1)
export default class CalmHit extends BasePositiveSkill implements Skill {
    type = SkillType.CalmHit;
    category = SkillCategory.Positive;
    name = "沉稳一击";

    mpCost = 20;

    increaseRate = 0.1;
    attackRate = 1.3;
    canCritical = false;
    getDescription(level: number) {
        return `骑士稳下阵势，沉稳一击，造成${this.getValueBySkillLevel(this.attackRate, level) * 100}%的伤害，该攻击无法触发暴击`;
    }
}