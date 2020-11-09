import { BaseNegativeSkill } from "../../../base-negative";
import { Skill } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";

@CharacterSkillRegister(SkillType.BloodsuckingTraining, RoleType.Warrior, 1)
export class BloodsuckingTraining extends BaseNegativeSkill implements Skill {
    type = SkillType.BloodsuckingTraining;
    name = "嗜血训练";
    increaseRate = 2;
    bloodsucking = 0.05;
    getDescription(level: number) {
        return `勇士沉迷于杀戮，提升${this.getValueBySkillLevel(this.bloodsucking, level) * 100}%吸血率`;
    }
}