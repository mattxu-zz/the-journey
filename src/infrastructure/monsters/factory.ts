import { KingOfBeast } from './boss';
import { MonsterType } from '../../definitions';
import { MonsterActions } from './definition';
import { Bat, Wolf, WildBoar, Elephant, Tiger, Lion } from './jungle';

export class MonstersFactory {
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

MonstersFactory.registerMonster(MonsterType.Bat, Bat);
MonstersFactory.registerMonster(MonsterType.Wolf, Wolf);
MonstersFactory.registerMonster(MonsterType.WildBoar, WildBoar);
MonstersFactory.registerMonster(MonsterType.Elephant, Elephant);
MonstersFactory.registerMonster(MonsterType.Tiger, Tiger);
MonstersFactory.registerMonster(MonsterType.Lion, Lion);
MonstersFactory.registerMonster(MonsterType.KingOfBeasts, KingOfBeast);
