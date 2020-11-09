import { ItemActions } from './definition';
import { ItemType } from '../../definitions';
import { Hemostasis, GoodHemostasis, PerfectHemostasis } from './hemostasis';
import { AttackTreasure, GodAttackTreasure, SantaAttackTreasure } from './attack';
import { DefendTreasure, GodDefendTreasure, SantaDefendTreasure } from './defend';

export class ItemsFactory {
    private static _items: DictionaryString<any> = {};

    public static registerItem(key: ItemType, item: any) {
        this._items[key] = item;
    }

    public static getItem(key: ItemType): ItemActions | null {
        const item = this._items[key];
        if (item) {
            return new item();
        }

        return null;
    }
}

ItemsFactory.registerItem(ItemType.Hemostasis, Hemostasis);
ItemsFactory.registerItem(ItemType.GoodHemostasis, GoodHemostasis);
ItemsFactory.registerItem(ItemType.PerfectHemostasis, PerfectHemostasis);
ItemsFactory.registerItem(ItemType.AttackTreasure, AttackTreasure);
ItemsFactory.registerItem(ItemType.GodAttackTreasure, GodAttackTreasure);
ItemsFactory.registerItem(ItemType.SantaAttackTreasure, SantaAttackTreasure);
ItemsFactory.registerItem(ItemType.DefendTreasure, DefendTreasure);
ItemsFactory.registerItem(ItemType.GodDefendTreasure, GodDefendTreasure);
ItemsFactory.registerItem(ItemType.SantaDefendTreasure, SantaDefendTreasure);