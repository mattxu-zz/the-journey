import { storeGoodsMappings } from "./mappings";
import { Store } from "./definition";
import { judge } from "../../utils/percentage";
import { EquipmentType } from "../../definitions";
import { EquipmentBuild } from "../equipment-build/builder";
import { ItemBuilder } from "../item-builder/builder";

function isEquipmentType(type: any): type is EquipmentType {
    return Object.values(EquipmentType).includes(type);
}

export class StoreBuilder {
    static build(level: number): Store {
        const mapping = storeGoodsMappings.find(m => m.level === level);
        if (!mapping) {
            throw Error('没有找到符合等级的商店！')
        }

        let store: Store = {
            name: mapping.name,
            items: [],
            equipments: []
        }

        mapping.goods.forEach(goods => {
            if (judge(goods.rate)) {
                if (isEquipmentType(goods.type)) {
                    const newEquip = EquipmentBuild.generate(goods.type);
                    if (newEquip) {
                        store.equipments.push(newEquip);
                    }
                } else {
                    const newItem = ItemBuilder.generate(goods.type);
                    if (newItem) {
                        store.items.push(newItem);
                    }
                }
            }
        })

        return store;
    }
}