import { BaseHemostasis } from './base';
import { ItemActions } from '../definition';

/*
		好止血草
		回复50%生命
*/
export class GoodHemostasis extends BaseHemostasis implements ItemActions {
	price = 100;
	cureRate = 0.5;
}
