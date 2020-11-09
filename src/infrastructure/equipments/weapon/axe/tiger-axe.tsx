import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseAxe } from "./base";

/*
        猛虎斧
        增加120点攻击
        增加150点生命
        20%吸血率
*/
export class TigerAxe extends BaseAxe implements EquipmentActions {
    level = EquipmentLevel.Good;
    price = 300;
    attackRate = 120;
    hpRate = 150;
    bloodsucking = 0.2;
}