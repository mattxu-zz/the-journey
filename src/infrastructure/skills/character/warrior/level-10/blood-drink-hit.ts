import { Skill, SkillCategory } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";
import BasePositiveSkill from "../../../base-positive";

@CharacterSkillRegister(SkillType.BloodDrinkHit, RoleType.Warrior, 10)
export default class BloodDrinkHit extends BasePositiveSkill implements Skill {
    type = SkillType.BloodDrinkHit;
    category = SkillCategory.Positive;
    name = "饮血斩";

    mpCost = 50;

		increaseRate = 0.1;
		extraBloodsucking = 1;
    attackRate = 1.2;
    getDescription(level: number) {
        return `勇士嗜血怒斩，造成${this.getValueBySkillLevel(this.attackRate, level) * 100}%的伤害，此攻击必定触发吸血`;
    }
}