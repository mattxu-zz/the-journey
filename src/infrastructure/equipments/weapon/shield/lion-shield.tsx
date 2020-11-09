import { EquipmentLevel, Status } from "../../../../definitions";
import { EquipmentActions, Effect } from "../../definition";
import { BaseShield } from "./base";
import { judge } from "../../../../utils/percentage";
import MessageService from "../../../../utils/message";
import React from 'react'

/*
        雄狮盾
        增加100点防御
        增加200点生命
        20%提高50%防御
*/
export class LionShield extends BaseShield implements EquipmentActions {
    level = EquipmentLevel.Good;
    price = 300;
    defendRate = 100;
    hpRate = 200;
    getDescription(): JSX.Element {
        const baseDesc = super.getDescription();
        return (<div>
            {baseDesc}
            <p>20%提高50%防御</p>
        </div>)
    }
    triggerDefendEffect(monsterDamage: number, userDefend: number, userStatus: Status): Effect {
        if (judge(0.2)) {
            MessageService.success('雄狮盾被动触发！');
            userDefend *= 1.5;
        }
        return {
            damage: monsterDamage,
            defend: userDefend
        }
    }
}