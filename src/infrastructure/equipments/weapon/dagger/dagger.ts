import { EquipmentLevel } from "../../../../definitions";
import { EquipmentActions } from "../../definition";
import { BaseDagger } from "./base";

/*
        匕首
        增加30点攻击
        增加5%暴击
*/
export class Dagger extends BaseDagger implements EquipmentActions {
    level = EquipmentLevel.Common;
    price = 100;
    attackRate = 30;
    critical = 0.05;
}