import { Skill, SkillCategory } from "./definition";
import { Status, SkillType } from "../../definitions";
import BaseSkill from "./base";
import { parseObjectValuesToFix2 } from "../../utils";

export default class BaseNegativeSkill extends BaseSkill implements Skill {
    getHpCost(level: number): number {
        return 0;
    }
    getMpCost(level: number): number {
        return 0;
    }
    type!: SkillType;
    category: SkillCategory = SkillCategory.Negative;
    name!: string;
    
    increaseRate = 1;
    hp: number = 0;
	maxMP: number = 0;
	mp: number = 0;
	attack: number = 0;
	defend: number = 0;
	critical: number = 0;
	criticalDamage: number = 0;
	dodge: number = 0;
	bloodsucking: number = 0;
	bloodsuckingRate: number = 0;	

    active(characterStatus: Status, level: number) {
        this.destroy(characterStatus, level - 1);
        characterStatus.MaxHP += this.getValueBySkillLevel(this.hp, level);
        characterStatus.MaxMP += this.getValueBySkillLevel(this.mp, level);
        characterStatus.Attack += this.getValueBySkillLevel(this.attack, level);
        characterStatus.Defend += this.getValueBySkillLevel(this.defend, level);
        characterStatus.Critical += this.getValueBySkillLevel(this.critical, level);
        characterStatus.CriticalDamage += this.getValueBySkillLevel(this.criticalDamage, level);
        characterStatus.Dodge += this.getValueBySkillLevel(this.dodge, level);
        characterStatus.Bloodsucking += this.getValueBySkillLevel(this.bloodsucking, level);
        characterStatus.BloodsuckingRate += this.getValueBySkillLevel(this.bloodsuckingRate, level);
        parseObjectValuesToFix2(characterStatus);
    }
    destroy(characterStatus: Status, level: number) {
        if (level <= 0) {
            return;
        }
        characterStatus.MaxHP -= this.getValueBySkillLevel(this.hp, level);
        characterStatus.HP = characterStatus.HP > characterStatus.MaxHP ? characterStatus.MaxHP: characterStatus.HP;
        characterStatus.MaxMP -= this.getValueBySkillLevel(this.mp, level);
        characterStatus.MP = characterStatus.MP > characterStatus.MaxMP ? characterStatus.MaxMP: characterStatus.MP;
        characterStatus.Attack -= this.getValueBySkillLevel(this.attack, level);
        characterStatus.Defend -= this.getValueBySkillLevel(this.defend, level);
        characterStatus.Critical -= this.getValueBySkillLevel(this.critical, level);
        characterStatus.CriticalDamage -= this.getValueBySkillLevel(this.criticalDamage, level);
        characterStatus.Dodge -= this.getValueBySkillLevel(this.dodge, level);
        characterStatus.Bloodsucking -= this.getValueBySkillLevel(this.bloodsucking, level);
        characterStatus.BloodsuckingRate -= this.getValueBySkillLevel(this.bloodsuckingRate, level);
        parseObjectValuesToFix2(characterStatus);
    }
}