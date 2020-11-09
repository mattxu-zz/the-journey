import { EquipmentActions } from "../definition";
import { RoleType, EquipmentLevel, EquipmentPlace } from "../../../definitions";
import { BaseEquipment } from "../base";
export class BaseArmor extends BaseEquipment implements EquipmentActions {
    limit!: RoleType[];
    level!: EquipmentLevel;
    places = [EquipmentPlace.Body]
}