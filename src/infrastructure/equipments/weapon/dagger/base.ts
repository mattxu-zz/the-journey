import { BaseWeapon } from "../base";
import { RoleType, EquipmentPlace } from "../../../../definitions";
import { EquipmentActions } from "../../definition";

export class BaseDagger extends BaseWeapon implements EquipmentActions {
    limit = [RoleType.Assasin];
    places = [EquipmentPlace.RightHand, EquipmentPlace.LeftHand];
}