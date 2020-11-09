import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseSword } from "./base";

/*
        长剑
        增加40点攻击
*/
export class Sword extends BaseSword implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 100;
    attackRate = 40;
}