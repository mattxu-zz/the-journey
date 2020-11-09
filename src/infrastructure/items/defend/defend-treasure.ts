import { BaseDefendTreasure } from './base';
import { ItemActions } from '../definition';

/*
        防御果
        增加20点防御
*/
export class DefendTreasure extends BaseDefendTreasure implements ItemActions {
        price = 50;
	rate = 20;
}
