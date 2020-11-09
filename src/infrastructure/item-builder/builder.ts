import { Item, MonsterType, ItemType } from "../../definitions";
import monsterItemDropRateMappings from './mappings';
import { MonsterItemMapping } from "./definition";
import { judge } from "../../utils/percentage";
import { guid } from "../../utils";
import MessageService from "../../utils/message";
import { ItemsFactory } from "../items";
import StatisticsCenter from "../statistics";


export class ItemBuilder {
	public static build(items: Item[], monsterType: MonsterType): Item[] {
		try {
			const mapping = monsterItemDropRateMappings[monsterType] as MonsterItemMapping;
			let isDropped = false;
			mapping.items.forEach(item => {
				// 启用此代码，只能掉落一件物品
				if (isDropped) {
					return;
				}
				if (judge(item.rate)) {
					StatisticsCenter.dropItem();
					const dropItemType = item.type;
					MessageService.success(`${monsterType}掉落了${dropItemType}！`);
					const existItem = items.find(item => item.Type === dropItemType);
					if (existItem) {
						existItem.Amount++;
					} else {
						const newItem = ItemBuilder.generate(dropItemType);
						if (newItem) {
							items.push(newItem);
						}
					}
					isDropped = true;
				}
			});
			return items;
		}
		catch (e) {
			return items;
		}
	}

	
	public static generate(type: ItemType): Item | null {
		const itemActions = ItemsFactory.getItem(type);
		if (itemActions) {
			return {
				Id: guid(),
				Type: type,
				Name: type.toString(),
				Icon: `${process.env.PUBLIC_URL}/assets/icons/items/${type.toString()}.png`,
				Amount: 1,
				Description: itemActions.getDescription(),
				Price: itemActions.price
			}
		}
		return null;
	}
}