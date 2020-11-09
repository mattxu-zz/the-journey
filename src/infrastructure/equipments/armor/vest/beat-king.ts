import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseVest } from "./base";

/*
        兽王背心
        增加100点防御
        增加200点攻击
        闪避+5%
        暴击+5%
*/
export class BeatKingVest extends BaseVest implements EquipmentActions {
    level = EquipmentLevel.Rare;
    price = 500;
    defendRate = 100;
    attackRate = 200;
    dodge = 0.05
    critical = 0.05;
}