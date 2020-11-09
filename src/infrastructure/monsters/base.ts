import { Status } from '../../definitions';
import { getMonsterDamage } from '../../utils/damage';
import { judge } from '../../utils/percentage';
import { getMonsterDefend } from '../../utils/defend';
import { MonsterActions } from './definition';
import MessageService from '../../utils/message';

export abstract class BaseMonster implements MonsterActions {
    defendPercent = 0;
    defendRate = 1;
    defendMessage: String | null = null;
    getDamage(status: Status): number {
		let damage = getMonsterDamage(status);
		return damage;
	}
    getDefend(status: Status): number {
        let defend = getMonsterDefend(status);
		if (judge(this.defendPercent)) {
			MessageService.warning(this.defendMessage ? this.defendMessage: `敌人抵挡了你的攻击！（${this.defendRate}倍防御）`);
			defend *= this.defendRate;
		}

		return defend;
    };
}
