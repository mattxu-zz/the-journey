import { Monster, MonsterType } from "../../definitions";
import { MonsterParameterFactory } from "./factory";
import { MonsterParameter } from "./definition";
import config from "../../config";
import { guid, randomBetween } from "../../utils";

export class MonsterBuilder {
    public static build(type: MonsterType): Monster | null {
        let monsterParameter = MonsterParameterFactory.getMonsterParameter(type);
        if (monsterParameter) {
            monsterParameter = monsterParameter as MonsterParameter;
            const monster: Monster = {
                Id: guid(),
                Icon: `${process.env.PUBLIC_URL}/assets/icons/monsters/${type.toString()}.png`,
                Status: {
                    Name: monsterParameter.Name,
                    MaxHP: this.getDiffcultyBasedRandomNumber(monsterParameter.HpRange),
                    HP: 0,
                    MaxMP: this.getDiffcultyBasedRandomNumber(monsterParameter.MpRange),
                    MP: 0,
                    Attack: this.getDiffcultyBasedRandomNumber(monsterParameter.AttackRange),
                    Defend: this.getDiffcultyBasedRandomNumber(monsterParameter.DefendRange),
                    Critical: this.getDiffcultyBasedRandomNumber(monsterParameter.CriticalRange),
                    CriticalDamage: this.getDiffcultyBasedRandomNumber(monsterParameter.CriticalDamageRange),
                    Dodge: this.getDiffcultyBasedRandomNumber(monsterParameter.DodgeRange),
                    Bloodsucking: this.getDiffcultyBasedRandomNumber(monsterParameter.BloodsuckingRange),
                    BloodsuckingRate: this.getDiffcultyBasedRandomNumber(monsterParameter.BloodsuckingRateRange),
                },
                Type: type,
                Experience: this.getDiffcultyBasedRandomNumber(monsterParameter.ExperienceRange),
                Money: this.getDiffcultyBasedRandomNumber(monsterParameter.MoneyRange),
                Skills: [],
            }
            monster.Status.HP = monster.Status.MaxHP;
            monster.Status.MP = monster.Status.MaxMP;
            return monster;
        }

        console.error(`Monster type ${type.toString()} not found`);
        return null;
    }

    private static getDiffcultyBasedRandomNumber(range: number[]): number {
        const min = range[0];
        const max = range[1];
        const difficultyWave = 1 + config.difficulty / 10;
        if (min === max) {
            return Math.floor(difficultyWave * min);
        }
        if (min < 1 && max < 1) {
            const result = Number(((difficultyWave * randomBetween(min * 100, max * 100))/100).toFixed(2));
            return result;
        }
        return Math.floor(difficultyWave * randomBetween(min, max))
    }
}