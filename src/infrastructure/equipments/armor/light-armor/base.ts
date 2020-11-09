import { BaseArmor } from "../base";
import { RoleType } from "../../../../definitions";
import { EquipmentActions } from "../../definition";

export class BaseLightArmor extends BaseArmor implements EquipmentActions {
    limit = [RoleType.Warrior];
}
