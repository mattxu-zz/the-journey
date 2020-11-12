 import { Skill, SkillCategory } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";
import BasePositiveSkill from "../../../base-positive";

@CharacterSkillRegister(SkillType.QuickHit, RoleType.Assasin, 1)
export default class QuickHit extends BasePositiveSkill implements Skill {
    type = SkillType.QuickHit;
    category = SkillCategory.Positive;
    name = "闪电一击";

    mpCost = 20;

    increaseRate = 0.05
    extraCritical = 0.2;
    canDodge = false;
    getDescription(level: number) {
        return `刺客攻其不备，提升${this.getValueBySkillLevel(this.extraCritical, level) * 100}%的暴击率，该攻击无法被闪避`;
    }
}