import { Skill, SkillCategory } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType, Status } from "../../../../../definitions";
import BasePositiveSkill from "../../../base-positive";
import { getDamage } from "../../../../../utils/damage";

@CharacterSkillRegister(SkillType.ShieldHit, RoleType.Knight, 10)
export default class ShieldHit extends BasePositiveSkill implements Skill {
    type = SkillType.ShieldHit;
    category = SkillCategory.Positive;
    name = "盾牌打击";

    mpCost = 50;

    increaseRate = 0.05;
    DefendConvertRate = 0.1
    getDescription(level: number) {
        return `骑士持盾猛击，每一点防御力额外造成${this.getValueBySkillLevel(this.DefendConvertRate, level) * 100}点的伤害`;
		}
		
    protected calculateDamage(characterStatus: Status, level: number): number {
			const damagePoint = getDamage(characterStatus);
			const convertRate = this.getValueBySkillLevel(this.DefendConvertRate, level);
			const extraDamage = characterStatus.Defend * convertRate;
			return Math.round(damagePoint + extraDamage)
	 }
}