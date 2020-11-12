import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
    雄狮  
    攻击20%造成1.2倍伤害
    防御时30%几率防御1.5倍
*/
export default class Lion extends BaseMonster implements MonsterActions {
    defendPercent = 0.3;
	defendRate = 1.5;
}
