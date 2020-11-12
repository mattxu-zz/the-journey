import { EquipmentActions } from './definition';
import { EquipmentType } from '../../definitions';
import * as Weapons from './weapon';
import * as Armors from './armor';

export class EquipmentFactory {
    private static _equipments: DictionaryString<any> = {};

    public static registerEquipment(key: any, equipment: any) {
        this._equipments[key] = equipment;
    }

    public static getEquipment(key: EquipmentType): EquipmentActions | null {
        const equipment = this._equipments[key];
        if (equipment) {
            return new equipment();
        }

        return null;
    }
}

const equipment: DictionaryString<any> = {...Weapons, ...Armors};
Object.keys(equipment).forEach((key) => {
    EquipmentFactory.registerEquipment(EquipmentType[key as keyof typeof EquipmentType], equipment[key]);
});