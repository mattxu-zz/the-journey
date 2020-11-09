import { BaseAttackTreasure } from './base';
import { ItemActions } from '../definition';

/*
        力量果
        增加20点攻击
*/
export class AttackTreasure extends BaseAttackTreasure implements ItemActions {
        price = 50;
	rate = 20;
}
