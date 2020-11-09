import { BaseWeapon } from "../base";
import { RoleType, EquipmentPlace } from "../../../../definitions";
import { EquipmentActions } from "../../definition";

export class BaseSword extends BaseWeapon implements EquipmentActions {
    limit = [RoleType.Knight];
    places = [EquipmentPlace.RightHand];
}