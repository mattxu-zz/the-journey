import { BaseWeapon } from "../base";
import { RoleType, EquipmentPlace } from "../../../../definitions";
import { EquipmentActions } from "../../definition";

export class BaseAxe extends BaseWeapon implements EquipmentActions {
    limit = [RoleType.Warrior];
    places = [EquipmentPlace.DoubleHand];
}