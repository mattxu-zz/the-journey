import * as Boss from './boss';
import { MonsterType } from '../../definitions';
import { MonsterActions } from './definition';
import * as JungleMonsters from './jungle';
import * as AbandonedLandMonsters from './abandoned-land';

export default class MonstersFactory {
    private static _monsters: DictionaryString<any> = {};

    public static registerMonster(key: MonsterType, monster: any) {
        this._monsters[key] = monster;
    }

    public static getMonster(key: MonsterType): MonsterActions | null {
        const monster = this._monsters[key];
        if (monster) {
            return new monster();
        }

        return null;
    }
}

const monsters: DictionaryString<any> = {...JungleMonsters, ...AbandonedLandMonsters, ...Boss};
Object.keys(monsters).forEach((key) => {
    MonstersFactory.registerMonster(MonsterType[key as keyof typeof MonsterType], monsters[key]);
});
