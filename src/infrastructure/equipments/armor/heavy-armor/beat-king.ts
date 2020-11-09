import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseHeavyArmor } from "./base";

/*
        兽王重甲
        增加300点防御
        增加500点生命
        闪避-5%
*/
export class BeatKingHeavyArmor extends BaseHeavyArmor implements EquipmentActions {
    level = EquipmentLevel.Rare;
    price = 500;
    defendRate = 300;
    hpRate = 500;
    dodge = -0.05;
}