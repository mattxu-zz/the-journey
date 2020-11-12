import { BaseHemostasis } from './base';
import { ItemActions } from '../definition';

/*
		完美止血草
		回复100%生命
*/
export class PerfectHemostasis extends BaseHemostasis implements ItemActions {
	price = 200;
	cureRate = 1;
}
