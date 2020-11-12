import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
    DBandit-魔化山贼
    攻击10%几率造成2倍伤害
    防御10%几率2倍
*/
export default class DBandit extends BaseMonster implements MonsterActions {
    criticalPercent = 0.1;
    criticalRate = 2;
    defendPercent = 0.1;
	defendRate = 2;
}
