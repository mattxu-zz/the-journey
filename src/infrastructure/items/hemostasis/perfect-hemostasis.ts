import { BaseHemostasis } from './base';
import { ItemActions } from '../definition';

/*
		完美止血草
		回复生命500
*/
export class PerfectHemostasis extends BaseHemostasis implements ItemActions {
	price = 200;
	cureRate = 500;
}
