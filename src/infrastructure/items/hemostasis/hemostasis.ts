import { BaseHemostasis } from './base';
import { ItemActions } from '../definition';

/*
		止血草
		回复20%生命
*/
export class Hemostasis extends BaseHemostasis implements ItemActions {
	price = 50;
	cureRate = 0.2;
}
