import BaseMpPotion from './base';
import { ItemActions } from '../definition';

/*
		完美回蓝药水
		回复100%MP
*/
export default class PerfectMpPotion extends BaseMpPotion implements ItemActions {
	price = 200;
	cureRate = 1;
}
