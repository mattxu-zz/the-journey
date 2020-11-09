import { Status, RoleType, EquipmentLevel, EquipmentPlace } from "../../definitions";

export interface EquipmentActions {
    limit: RoleType[];
    level: EquipmentLevel;
    places: EquipmentPlace[];
    price: number;
    takeOn(status: Status): void;
    takeOff(status: Status): void;
    getDescription(): JSX.Element;
    triggerAttackEffect(userDamage: number, monsterDefend: number, userStatus: Status): Effect;
    triggerDefendEffect(monsterDamage: number, userDefend: number, userStatus: Status): Effect;
}

export interface Effect {
    damage: number;
    defend: number;
}