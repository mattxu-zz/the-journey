import { BaseHemostasis } from './base';
import { ItemActions } from '../definition';

/*
		好止血草
		回复生命200
*/
export class GoodHemostasis extends BaseHemostasis implements ItemActions {
	price = 100;
	cureRate = 200;
}
