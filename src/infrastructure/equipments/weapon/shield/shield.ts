import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseShield } from "./base";

/*
        盾牌
        增加50点防御
        增加100点生命
*/
export class Shield extends BaseShield implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 100;
    defendRate = 50;
    hpRate = 100;
}