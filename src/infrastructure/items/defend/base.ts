import { ItemActions } from "../definition";
import { Status } from "../../../definitions";

export abstract class BaseDefendTreasure implements ItemActions {
	price!: number;
	rate = 0;
	use(status: Status) {
		status.Defend += this.rate;
	}

	getMessage(): string {
		return `增加了${this.rate}点防御`;
	}
	
	getDescription() {
		return `使用后增加*${this.rate}*点防御`;
	}
}