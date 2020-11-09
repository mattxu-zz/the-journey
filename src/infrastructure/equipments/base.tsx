import { EquipmentActions, Effect } from "./definition";
import { RoleType, EquipmentLevel, Status, EquipmentPlace } from "../../definitions";
import React from 'react'
export class BaseEquipment implements EquipmentActions {
    price!: number;
    limit!: RoleType[];    
    level!: EquipmentLevel;
    places!: EquipmentPlace[];
    protected attackRate = 0;
    protected defendRate = 0;
    protected hpRate = 0;
    protected mpRate = 0;
    protected critical = 0;
    protected criticalDamage = 0;
    protected dodge = 0;
    protected bloodsucking = 0;
    protected bloodsuckingRate = 0;
    takeOn(status: Status) {
        status.Attack += this.attackRate;
        status.Defend += this.defendRate;
        status.MaxHP += this.hpRate;
        status.MaxMP += this.mpRate;
        status.Critical = Number((status.Critical + this.critical).toFixed(2));
        status.CriticalDamage = Number((status.CriticalDamage + this.criticalDamage).toFixed(2));
        status.Dodge = Number((status.Dodge + this.dodge).toFixed(2));
        status.Bloodsucking = Number((status.Bloodsucking + this.bloodsucking).toFixed(2));
        status.BloodsuckingRate = Number((status.BloodsuckingRate + this.bloodsuckingRate).toFixed(2));
    }
    takeOff(status: Status) {
        status.Attack -= this.attackRate;
        status.Defend -= this.defendRate;
        status.MaxHP -= this.hpRate;
        status.MaxMP -= this.mpRate;
        if (status.HP > status.MaxHP) {
            status.HP = status.MaxHP;
        }
        if (status.MP > status.MaxMP) {
            status.MP = status.MaxMP;
        }
        
        status.Critical = Number((status.Critical - this.critical).toFixed(2));
        status.CriticalDamage = Number((status.CriticalDamage - this.criticalDamage).toFixed(2));
        status.Dodge = Number((status.Dodge - this.dodge).toFixed(2));
        status.Bloodsucking = Number((status.Bloodsucking - this.bloodsucking).toFixed(2));
        status.BloodsuckingRate = Number((status.BloodsuckingRate - this.bloodsuckingRate).toFixed(2));
    }
    getDescription(): JSX.Element {
        return (<div>
            <p>职业：{this.limit.map(type => {
                return type.toString() + ' '
            })}</p>
            <p>价值：{this.price}</p>
            {this.attackRate ?<p className="attack">攻击 {this.attackRate}</p>: ''}
            {this.defendRate ? <p className="defend">防御 {this.defendRate}</p>: ''}
            {this.hpRate ? <p className="hp">生命上限 {this.hpRate}</p>: ''}
            {this.mpRate ? <p className="mp">魔力上限 {this.mpRate}</p>: ''}
            {this.critical ? <p className="critical">暴击率 {this.critical * 100}%</p>: ''}
            {this.criticalDamage ? <p className="critical-damage">暴击伤害 {this.criticalDamage * 100}%</p>: ''}
            {this.dodge ? <p className="dodge">闪避 {this.dodge * 100}%</p>: ''}
            {this.bloodsucking ? <p className="bloodsucking">吸血率 {this.bloodsucking * 100}%</p>: ''}
            {this.bloodsuckingRate ? <p className="bloodsucking-rate">吸血转化率 {this.bloodsuckingRate * 100}%</p>: ''}
        </div>)
    }
    triggerAttackEffect(userDamage: number, monsterDefend: number, userStatus: Status): Effect {
        return {
            damage: userDamage,
            defend: monsterDefend
        }
    }
    triggerDefendEffect(monsterDamage: number, userDefend: number, userStatus: Status): Effect {
        return {
            damage: monsterDamage,
            defend: userDefend
        }
    }
}