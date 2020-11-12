import { Skill, SkillCategory, UseSkillResult } from "./definition";
import BaseSkill from "./base";
import { SkillType, Status } from "../../definitions";
import { BattleReportType, BattleDamage, DamageType } from "../../redux/definition";
import { judge } from "../../utils/percentage";
import { guid } from "../../utils";
import { calculateDefendPercent } from "../../utils/defend";
import { getDamage } from "../../utils/damage";
import StatisticsCenter from "../statistics";
import MessageService from "../../utils/message";

export default class BasePositiveSkill extends BaseSkill implements Skill {
    
    type!: SkillType;
    category: SkillCategory = SkillCategory.Positive;
    name!: string;

    increaseRate = 1;
    attackRate: number = 1;
    extraDamage: number = 0;
    extraDefendDecrease: number = 0;
    extraCritical: number = 0;
    extraCriticalDamage: number = 0;
    extraBloodsucking: number = 0;
    extraBloodsuckingRate: number = 0;
    extraDodge: number = 0;
    canDodge = true;
    canCritical = true;
    canBloodsucking = true;
    use(characterStatus: Status, monsterStatus: Status, level: number): UseSkillResult | null {
        // 消耗魔力或生命
        const hpCost = this.getHpCost(level);
        const mpCost = this.getMpCost(level);
        if (hpCost > characterStatus.HP ) {
            MessageService.error('生命不足！');
            return null;
        }
        if (mpCost > characterStatus.MP) {
            MessageService.error('魔力不足！');
            return null;
        }
        characterStatus.HP -= hpCost;
        characterStatus.MP -= mpCost;

        let reports = [];
        let battleDamage: BattleDamage = {
            type: DamageType.Common,
            value: 0
        }
        let differ = 0;
        // 闪避
        if (this.canDodge && judge(monsterStatus.Dodge + this.extraDodge)) {
            reports.push({
                id: guid(),
                type: BattleReportType.monsterDodge,
                content: `敌方闪避了攻击！`,
                time: new Date()
            })
        } else {
            let damage = this.calculateDamage(characterStatus, level);
            // 暴击
            if (this.canCritical && judge(characterStatus.Critical + this.getValueBySkillLevel(this.extraCritical, level))) {
                damage *= (characterStatus.CriticalDamage + this.getValueBySkillLevel(this.extraCriticalDamage, level));
                reports.push({
                    id: guid(),
                    type: BattleReportType.characterCritical,
                    content: `玩家触发暴击！`,
                    time: new Date()
                })
                battleDamage.type = DamageType.Critical;
            }
            const defendPercent = calculateDefendPercent(monsterStatus.Defend - this.getValueBySkillLevel(this.extraDefendDecrease, level));
            differ = Math.round(damage * defendPercent);
            differ = differ > 0 ? differ : 1;

            // 触发吸血
            if (this.canBloodsucking && judge(characterStatus.Bloodsucking + this.getValueBySkillLevel(this.extraBloodsucking, level))) {
                const blood = Math.round(differ * (characterStatus.BloodsuckingRate + this.getValueBySkillLevel(this.extraBloodsuckingRate, level)));
                characterStatus.HP += blood;
                if (characterStatus.HP > characterStatus.MaxHP) {
                    characterStatus.HP = characterStatus.MaxHP;
                }
                reports.push({
                    id: guid(),
                    type: BattleReportType.characterSuck,
                    content: `玩家触发吸血，吸取了${blood}点HP！`,
                    time: new Date()
                })
                battleDamage.type = DamageType.Bloodsucking;
            }
        }

        StatisticsCenter.accountDamage(differ);
        monsterStatus.HP -= differ;
        if (monsterStatus.HP <= 0) {
            monsterStatus.HP = 0;
            StatisticsCenter.killMonster();
        }

        reports.push({
            id: guid(),
            type: BattleReportType.characterAttack,
            content: `玩家使用*${this.name}*造成了${differ}点伤害, 敌方剩余血量${monsterStatus.HP}`,
            time: new Date()
        })

        return {
            reports,
            battleDamage
        };
    }

    protected calculateDamage(characterStatus: Status, level: number): number {
       const damagePoint = getDamage(characterStatus);
       return Math.round(damagePoint * this.getValueBySkillLevel(this.attackRate, level) + this.getValueBySkillLevel(this.extraDamage, level))
    }
}