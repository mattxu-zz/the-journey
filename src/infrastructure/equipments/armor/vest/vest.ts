import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseVest } from "./base";

/*
        刺客背心
        增加50点防御
        增加100点攻击
        闪避+2%
*/
export class Vest extends BaseVest implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 200;
    defendRate = 50;
    attackRate = 100;
    dodge = 0.02
}