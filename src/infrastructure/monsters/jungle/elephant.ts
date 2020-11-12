import { BaseMonster } from '../base';
import { MonsterActions } from '../definition';

/*
  大象  
	防御时20%几率防御1.5倍
*/
export default class Elephant extends BaseMonster implements MonsterActions {
	defendPercent = 0.2;
	defendRate = 1.5;
	defendMessage = '大象：(别给我挠痒痒了！防御*1.5）'
}
