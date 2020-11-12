import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
		DSoldier-魔化士兵
		防御30%几率3倍
*/
export default class DSoldier extends BaseMonster implements MonsterActions {
	defendPercent = 0.3;
	defendRate = 3;
}
