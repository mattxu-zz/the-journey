import { BaseArmor } from "../base";
import { RoleType } from "../../../../definitions";
import { EquipmentActions } from "../../definition";

export class BaseHeavyArmor extends BaseArmor implements EquipmentActions {
    limit = [RoleType.Knight];
}
