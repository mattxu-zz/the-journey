import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseHeavyArmor } from "./base";

/*
        重甲
        增加100点防御
        增加150点生命
        闪避-2%
*/
export class HeavyArmor extends BaseHeavyArmor implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 200;
    defendRate = 100;
    hpRate = 150;
    dodge = -0.02;
}