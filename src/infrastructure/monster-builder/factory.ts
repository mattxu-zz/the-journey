import * as MonsterParameters from './monster-parameters';
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

const monsterParameters: DictionaryString<any> = {...MonsterParameters};
Object.keys(monsterParameters).forEach((key) => {
    const typeKey = key.replace('MonsterParameter', '');
    MonsterParameterFactory.registerMonsterParameter(MonsterType[typeKey as keyof typeof MonsterType], monsterParameters[key]);
});
