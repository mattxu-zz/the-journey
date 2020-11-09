import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseLightArmor } from "./base";

/*
        兽王轻甲
        增加150点防御
        增加200点生命
        增加100点攻击
        10%吸血
*/
export class BeatKingLightArmor extends BaseLightArmor implements EquipmentActions {
    level = EquipmentLevel.Rare;
    price = 500;
    defendRate = 150;
    hpRate = 200;
    attackRate = 100;
    bloodsucking = 0.1;
}