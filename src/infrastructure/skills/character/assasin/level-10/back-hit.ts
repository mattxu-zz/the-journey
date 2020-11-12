import { Skill, SkillCategory } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";
import BasePositiveSkill from "../../../base-positive";

@CharacterSkillRegister(SkillType.BackHit, RoleType.Assasin, 10)
export default class BackHit extends BasePositiveSkill implements Skill {
    type = SkillType.BackHit;
    category = SkillCategory.Positive;
    name = "背刺";

    mpCost = 50;

    increaseRate = 0.1;
    attackRate = 2;
		extraDodge = 0.1;
    getDescription(level: number) {
        return `刺客形如鬼魅，突击敌人背部，造成${this.getValueBySkillLevel(this.attackRate, level) * 100}%的伤害，该攻击会提升敌人${this.extraDodge * 100}的闪避率`;
    }
}