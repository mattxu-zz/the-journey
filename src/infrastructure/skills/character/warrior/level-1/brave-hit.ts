import { Skill, SkillCategory } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";
import BasePositiveSkill from "../../../base-positive";

@CharacterSkillRegister(SkillType.BraveHit, RoleType.Warrior, 1)
export default class BraveHit extends BasePositiveSkill implements Skill {
    type = SkillType.BraveHit;
    category = SkillCategory.Positive;
    name = "勇猛一击";

    hpCost = 100;

    increaseRate = 0.1;
    attackRate = 1.5;
    getDescription(level: number) {
        return `勇士不顾生命，勇猛一击，造成${this.getValueBySkillLevel(this.attackRate, level) * 100}%的伤害`;
    }
}