import { BaseAttackTreasure } from './base';
import { ItemActions } from '../definition';

/*
        力量神果
        增加50点攻击
*/
export class GodAttackTreasure extends BaseAttackTreasure implements ItemActions {
        price = 200;
	rate = 50;
}
