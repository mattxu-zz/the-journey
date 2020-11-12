import BaseMpPotion from './base';
import { ItemActions } from '../definition';

/*
		回蓝药水
		回复20%MP
*/
export default class MpPotion extends BaseMpPotion implements ItemActions {
	price = 50;
	cureRate = 0.2;
}
