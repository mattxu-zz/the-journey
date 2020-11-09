import { EquipmentActions } from './definition';
import { EquipmentType } from '../../definitions';
import { Axe, Dagger, Sword, Shield, TigerAxe, TigerDagger, LionShield } from './weapon';
import { HeavyArmor, LightArmor, Vest, BeatKingHeavyArmor, BeatKingLightArmor, BeatKingVest } from './armor';

export class EquipmentFactory {
    private static _equipments: DictionaryString<any> = {};

    public static registerEquipment(key: EquipmentType, equipment: any) {
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

EquipmentFactory.registerEquipment(EquipmentType.Axe, Axe);
EquipmentFactory.registerEquipment(EquipmentType.TigerAxe, TigerAxe);
EquipmentFactory.registerEquipment(EquipmentType.Dagger, Dagger);
EquipmentFactory.registerEquipment(EquipmentType.TigerDagger, TigerDagger);
EquipmentFactory.registerEquipment(EquipmentType.Sword, Sword);
EquipmentFactory.registerEquipment(EquipmentType.Shield, Shield);
EquipmentFactory.registerEquipment(EquipmentType.LionShield, LionShield);

EquipmentFactory.registerEquipment(EquipmentType.HeavyArmor, HeavyArmor);
EquipmentFactory.registerEquipment(EquipmentType.BeatKingHeavyArmor, BeatKingHeavyArmor);
EquipmentFactory.registerEquipment(EquipmentType.LightArmor, LightArmor);
EquipmentFactory.registerEquipment(EquipmentType.BeatKingLightArmor, BeatKingLightArmor);
EquipmentFactory.registerEquipment(EquipmentType.Vest, Vest);
EquipmentFactory.registerEquipment(EquipmentType.BeatKingVest, BeatKingVest);