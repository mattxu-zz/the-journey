import { BatMonsterParameter, WolfMonsterParameter, WildBoarMonsterParameter, ElephantMonsterParameter, TigerMonsterParameter, LionMonsterParameter, KingOfBeastsMonsterParameter } from './monster-parameters';
import { MonsterParameter } from './definition';
import { MonsterType } from '../../definitions';

export class MonsterParameterFactory {
    private static _monsterParameters: DictionaryString<any> = {};

    public static registerMonsterParameter(key: MonsterType, monsterParameter: any) {
        this._monsterParameters[key] = monsterParameter;
    }

    public static getMonsterParameter(key: MonsterType): MonsterParameter | null {
        const monsterParameter = this._monsterParameters[key];
        if (monsterParameter) {
            return new monsterParameter();
        }

        return null;
    }
}

MonsterParameterFactory.registerMonsterParameter(MonsterType.Bat, BatMonsterParameter);
MonsterParameterFactory.registerMonsterParameter(MonsterType.Wolf, WolfMonsterParameter);
MonsterParameterFactory.registerMonsterParameter(MonsterType.WildBoar, WildBoarMonsterParameter);
MonsterParameterFactory.registerMonsterParameter(MonsterType.Elephant, ElephantMonsterParameter);
MonsterParameterFactory.registerMonsterParameter(MonsterType.Tiger, TigerMonsterParameter);
MonsterParameterFactory.registerMonsterParameter(MonsterType.Lion, LionMonsterParameter);
MonsterParameterFactory.registerMonsterParameter(MonsterType.KingOfBeasts, KingOfBeastsMonsterParameter);
