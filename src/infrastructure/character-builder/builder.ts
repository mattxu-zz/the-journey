import { RoleType, Character } from "../../definitions";
import { RoleParameterFactory } from "./factory";
import { RoleParameter } from "./definition";
import { guid, randomBetween } from "../../utils";
import config from "../../config";

export class CharacterBuilder {
    public static build(name: string, type: RoleType): Character | null {
        let roleParameter = RoleParameterFactory.getRoleParameter(type);
        if (roleParameter) {
            roleParameter = roleParameter as RoleParameter;
            const character: Character = {
                Id: guid(),
                Icon: `${process.env.PUBLIC_URL}/assets/icons/characters/${type.toString()}.png`,
                Type: type,
                Status: {
                    Name: name,
                    MaxHP: this.getRandomNumber(roleParameter.HpRange),
                    HP: 0,
                    MaxMP: this.getRandomNumber(roleParameter.MpRange),
                    MP: 0,
                    Attack: this.getRandomNumber(roleParameter.AttackRange),
                    Defend: this.getRandomNumber(roleParameter.DefendRange),
                    Critical: roleParameter.Critical,
                    CriticalDamage: config.initCriticalDamage,
                    Dodge: roleParameter.Dodge,
                    Bloodsucking: roleParameter.Bloodsucking,
                    BloodsuckingRate: roleParameter.BloodsuckingRate
                },
                Level: 1,
                Experience: 0,
                ExperienceToLevelUp: config.experienceRate,
                StatusPoint: 0,
                SkillPoint: 0,
                Items: [],
                Equipments: [],
                Wearing: {},
                Money: 0,
                Skills: []
            }
            character.Status.HP = character.Status.MaxHP;
            character.Status.MP = character.Status.MaxMP;
            return character;
        }

        console.error(`Role type ${type.toString()} not found`);
        return null;
    }

    private static getRandomNumber(range: number[]): number {
        const min = range[0];
        const max = range[1];
        return randomBetween(min, max);
    }
}