import { StoreGoodsMapping } from "./definition";
import { ItemType, EquipmentType } from "../../definitions";

const basicGoods = [
    {
        type: ItemType.Hemostasis,
        rate: 1
    },
    {
        type: ItemType.GoodHemostasis,
        rate: 0.8
    },
    {
        type: ItemType.PerfectHemostasis,
        rate: 0.5
    },
    {
        type: ItemType.MpPotion,
        rate: 1
    },
    {
        type: ItemType.GoodMpPotion,
        rate: 0.8
    },
    {
        type: ItemType.PerfectMpPotion,
        rate: 0.5
    },
    {
        type: ItemType.AttackTreasure,
        rate: 1
    },
    {
        type: ItemType.DefendTreasure,
        rate: 1
    },
    {
        type: ItemType.GodAttackTreasure,
        rate: 0.8
    },
    {
        type: ItemType.GodDefendTreasure,
        rate: 0.8
    },
    {
        type: ItemType.SantaAttackTreasure,
        rate: 0.5
    },
    {
        type: ItemType.SantaDefendTreasure,
        rate: 0.5
    },
]

export const storeGoodsMappings: StoreGoodsMapping[] = [
    {
        level: 1,
        name: '丛林小店',
        goods: [
            ...basicGoods
        ]
    },
    {
        level: 2,
        name: '丛林小店',
        goods: [
            ...basicGoods,
            {
                type: EquipmentType.Axe,
                rate: 0.5
            },
            {
                type: EquipmentType.Dagger,
                rate: 0.5
            },
            {
                type: EquipmentType.Sword,
                rate: 0.5
            },
            {
                type: EquipmentType.Shield,
                rate: 0.5
            },
            {
                type: EquipmentType.HeavyArmor,
                rate: 0.5
            },
            {
                type: EquipmentType.LightArmor,
                rate: 0.5
            },
            {
                type: EquipmentType.Vest,
                rate: 0.5
            }
        ]
    },
    {
        level: 3,
        name: '丛林小店',
        goods: [
            
            ...basicGoods,
            {
                type: EquipmentType.Axe,
                rate: 0.8
            },
            {
                type: EquipmentType.Dagger,
                rate: 0.8
            },
            {
                type: EquipmentType.Sword,
                rate: 0.8
            },
            {
                type: EquipmentType.Shield,
                rate: 0.8
            },
            {
                type: EquipmentType.HeavyArmor,
                rate: 0.8
            },
            {
                type: EquipmentType.LightArmor,
                rate: 0.8
            },
            {
                type: EquipmentType.Vest,
                rate: 0.8
            }
        ]
    },
    {
        level: 4,
        name: '丛林小店',
        goods: [
            
            ...basicGoods,
            {
                type: EquipmentType.TigerAxe,
                rate: 0.5
            },
            {
                type: EquipmentType.TigerDagger,
                rate: 0.5
            },
            {
                type: EquipmentType.LionShield,
                rate: 0.5
            },
        ]
    },
    {
        level: 5,
        name: '丛林小店',
        goods: [
           
            ...basicGoods,
            {
                type: EquipmentType.TigerAxe,
                rate: 0.8
            },
            {
                type: EquipmentType.TigerDagger,
                rate: 0.8
            },
            {
                type: EquipmentType.LionShield,
                rate: 0.8
            },
            {
                type: EquipmentType.BeatKingHeavyArmor,
                rate: 0.3
            },
            {
                type: EquipmentType.BeatKingLightArmor,
                rate: 0.3
            },
            {
                type: EquipmentType.BeatKingVest,
                rate: 0.3
            },
        ]
    }
]
