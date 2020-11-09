import { BaseDefendTreasure } from './base';
import { ItemActions } from '../definition';

/*
        防御圣果
        增加100点防御
*/
export class SantaDefendTreasure extends BaseDefendTreasure implements ItemActions {
        price = 400;
	rate = 100;
}
