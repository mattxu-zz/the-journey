import { EquipmentType, ItemType, Item, Equipment } from "../../definitions";

export interface StoreGoodsMapping {
    level: number,
    name: string,
    goods: StoreGoods[]
}


export interface StoreGoods {
	type: EquipmentType | ItemType,
	rate: number
}

export interface Store {
    name: string,
    items: Item[],
    equipments: Equipment[],
}