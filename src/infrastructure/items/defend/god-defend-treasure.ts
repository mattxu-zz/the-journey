import { BaseDefendTreasure } from './base';
import { ItemActions } from '../definition';

/*
        防御神果
        增加50点防御
*/
export class GodDefendTreasure extends BaseDefendTreasure implements ItemActions {
        price = 200;
	rate = 50;
}
