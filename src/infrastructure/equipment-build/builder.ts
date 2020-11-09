import { Equipment, MonsterType, EquipmentType } from "../../definitions";
import monsterEquipmentDropRateMappings from './mappings';
import { MonsterEquipmentMapping } from "./definition";
import { judge } from "../../utils/percentage";
import MessageService from "../../utils/message";
import { guid } from "../../utils";
import EquipmentFactory from "../equipments";
import StatisticsCenter from "../statistics";

export class EquipmentBuild {
    public static build(equipments: Equipment[], monsterType: MonsterType): Equipment[] {
        try {
            const mapping = monsterEquipmentDropRateMappings[monsterType] as MonsterEquipmentMapping;
            let isDropped = false;
            mapping.equipments.forEach(equipment => {
                // 启用此代码，只能掉落一件装备
                if (isDropped) {
                	return;
                }
                if (judge(equipment.rate)) {
                    StatisticsCenter.dropEquipement();
                    const dropType = equipment.type;
                    const newEquip = EquipmentBuild.generate(equipment.type);
                    if (newEquip) {
                        equipments.push(newEquip);
                        MessageService.success(`${monsterType}掉落了${dropType}！`);
                        isDropped = true;
                    }
                }
            });
            return equipments;
        }
        catch (e) {
            return equipments;
        }
    }

    public static generate(type: EquipmentType): Equipment | null {
        const actions = EquipmentFactory.getEquipment(type);
        if (actions) {
            return {
                Id: guid(),
                Type: type,
                Name: type.toString(),
                Icon: `${process.env.PUBLIC_URL}/assets/icons/equipments/${type.toString()}.png`,
                Equipped: false,
                Level: actions.level,
                Limit: actions.limit,
                Price: actions.price,
            };
        }
        return null;
    }
}