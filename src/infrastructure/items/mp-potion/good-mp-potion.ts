import BaseMpPotion from './base';
import { ItemActions } from '../definition';

/*
		好回蓝药水
		回复50%MP
*/
export default class GoodMpPotion extends BaseMpPotion implements ItemActions {
	price = 100;
	cureRate = 0.5;
}
