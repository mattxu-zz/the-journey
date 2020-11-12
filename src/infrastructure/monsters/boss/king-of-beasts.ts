import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
    万兽之王  
    攻击20%造成2倍伤害
    防御时20%几率防御2倍
*/
export default class KingOfBeast extends BaseMonster implements MonsterActions {
    criticalPercent = 0.2;
    criticalRate = 2;
    defendPercent = 0.2;
	defendRate = 2;
}
