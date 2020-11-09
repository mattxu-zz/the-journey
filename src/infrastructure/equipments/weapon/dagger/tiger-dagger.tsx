import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseDagger } from "./base";

/*
        猛虎匕
        增加60点攻击
        15%暴击率
        10%闪避
*/
export class TigerDagger extends BaseDagger implements EquipmentActions {
    level = EquipmentLevel.Good;
    price = 300;
    attackRate = 60;
    critical = 0.15;
    dodge = 0.1;
}