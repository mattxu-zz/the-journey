import BaseNegativeSkill from "../../../base-negative";
import { Skill } from "../../../definition";
import { CharacterSkillRegister } from "../../factory";
import { RoleType, SkillType } from "../../../../../definitions";

@CharacterSkillRegister(SkillType.BloodsuckingTraining2, RoleType.Warrior, 10)
export default class BloodsuckingTraining2 extends BaseNegativeSkill implements Skill {
    type = SkillType.BloodsuckingTraining2;
    name = "嗜血训练2";
    increaseRate = 0.05;
    bloodsuckingRate = 0.1;
    getDescription(level: number) {
        return `勇士沉迷于杀戮，提升${this.getValueBySkillLevel(this.bloodsuckingRate, level) * 100}%吸血转化率`;
    }
}