import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseAxe } from "./base";

/*
        长斧
        增加60点攻击
        增加50点生命
*/
export class Axe extends BaseAxe implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 100;
    attackRate = 60;
    hpRate = 50;
}