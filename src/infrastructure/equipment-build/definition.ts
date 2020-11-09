import { EquipmentType } from "../../definitions";

export interface MonsterEquipmentMapping {
	equipments: MonsterEquipment[]
}

export interface MonsterEquipment {
	type: EquipmentType,
	rate: number
}