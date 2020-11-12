import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
		Soldier-士兵
		防御30%几率2倍
*/
export default class Soldier extends BaseMonster implements MonsterActions {
	defendPercent = 0.3;
	defendRate = 2;
}
