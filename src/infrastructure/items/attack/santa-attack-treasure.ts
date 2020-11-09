import { BaseAttackTreasure } from './base';
import { ItemActions } from '../definition';

/*
        力量圣果
        增加100点攻击
*/
export class SantaAttackTreasure extends BaseAttackTreasure implements ItemActions {
        price = 400;
        rate = 100;
}
