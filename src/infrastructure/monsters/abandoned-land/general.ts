import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
		General-将军
    攻击20%几率造成2.2倍伤害
    防御40%几率3倍
*/
export default class General extends BaseMonster implements MonsterActions {
	criticalPercent = 0.2;
	criticalRate = 2.2;
	defendPercent = 0.4;
	defendRate = 3;
}
