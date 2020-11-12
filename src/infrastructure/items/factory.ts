import { ItemActions } from './definition';
import { ItemType } from '../../definitions';
import * as Hemostasises from './hemostasis';
import * as MpPotions from './mp-potion';
import * as AttackTreasures from './attack';
import * as DefendTreasures from './defend';

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

const items: DictionaryString<any> = {...Hemostasises, ...MpPotions, ...AttackTreasures, ...DefendTreasures};
Object.keys(items).forEach((key) => {
    ItemsFactory.registerItem(ItemType[key as keyof typeof ItemType], items[key]);
});