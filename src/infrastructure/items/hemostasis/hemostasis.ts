import { BaseHemostasis } from './base';
import { ItemActions } from '../definition';

/*
		止血草
		回复生命100
*/
export class Hemostasis extends BaseHemostasis implements ItemActions {
	price = 50;
	cureRate = 100;
}
