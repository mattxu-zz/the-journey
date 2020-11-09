import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
    猛虎  
    防御时20%几率防御1.2倍
*/
export class Tiger extends BaseMonster implements MonsterActions {
    defendPercent = 0.2;
	defendRate = 1.2;
}
