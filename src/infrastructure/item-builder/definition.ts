import { ItemType } from "../../definitions";

export interface MonsterItemMapping {
	items: MonsterItem[]
}

export interface MonsterItem {
	type: ItemType,
	rate: number
}