import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
		DGeneral-魔化将军
    攻击20%造成3倍伤害
		防御20%几率5倍
*/
export default class DGeneral extends BaseMonster implements MonsterActions {
	criticalPercent = 0.2;
	criticalRate = 3;
	defendPercent = 0.2;
	defendRate = 5;
}
