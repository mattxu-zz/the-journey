import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseLightArmor } from "./base";

/*
        轻甲
        增加50点防御
        增加100点生命
        增加50点攻击
*/
export class LightArmor extends BaseLightArmor implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 200;
    defendRate = 50;
    hpRate = 100;
    attackRate = 50;
}