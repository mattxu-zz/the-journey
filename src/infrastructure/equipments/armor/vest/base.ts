import { BaseArmor } from "../base";
import { RoleType } from "../../../../definitions";
import { EquipmentActions } from "../../definition";

export class BaseVest extends BaseArmor implements EquipmentActions {
    limit = [RoleType.Assasin];
}
