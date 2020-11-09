import { MapItem, MapType, GameMap } from "./definition";
import mappings from './mappings';
import { MonsterBuilder } from "../monster-builder/builder";
import _ from "underscore";
import { MonsterType } from "../../definitions";
import { guid } from "../../utils";
import { StoreBuilder } from "../store-builder/builder";

export class MapBuilder {
    static itemAmount = 9;
    public static build(level: number): GameMap {
        let mapItems: Array<MapItem> = [];
        let remainItemCount = this.itemAmount;
        const mapping = mappings.mapMonsterLevelMappings.find(mapping => {
            return mapping.level === level
        });
        if (!mapping) {
            throw Error('没有匹配等级的地图！')
        }

        if (level % 5 === 0) {
            const mapping = mappings.mapBossLevelMappings.find(mapping => {
                return mapping.level === level
            });
            if (!mapping) throw new Error('no boss found');
            const monsterType = _.sample(mapping.monsters) as MonsterType;
            const monster = MonsterBuilder.build(monsterType);
            mapItems.push({
                Id: guid(),
                Type: MapType.BossBattle,
                Description: `你遭遇了${monsterType.toString()}`,
                Content: monster,
                Passed: false,
                Show: false
            });
            remainItemCount--;
        } else {
            mapItems.push({
                Id: guid(),
                Type: MapType.Exit,
                Description: `第${level}层的出口`,
                Passed: false,
                Show: false
            });
            remainItemCount--;
        }

        // 商店
        const store = StoreBuilder.build(level);
        mapItems.push({
            Id: guid(),
            Type: MapType.Store,
            Description: `你来到了${store.name}`,
            Content: store,
            Passed: false,
            Show: false
        });
        remainItemCount--;

        for (let i = 0; i < remainItemCount; i++) {
            const monsterType = _.sample(mapping.monsters) as MonsterType;
            const monster = MonsterBuilder.build(monsterType);
            mapItems.push({
                Id: guid(),
                Type: MapType.Battle,
                Description: `你遭遇了${monsterType.toString()}`,
                Content: monster,
                Passed: false,
                Show: false
            })
        }

        return {
            Id: guid(),
            Name: `Level ${level}`,
            Items: _.shuffle(mapItems),
            Level: level
        };
    }
}