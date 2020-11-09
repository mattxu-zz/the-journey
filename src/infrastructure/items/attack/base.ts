import { ItemActions } from "../definition";
import { Status } from "../../../definitions";

export abstract class BaseAttackTreasure implements ItemActions {
	price!: number;
	rate = 0;
	use(status: Status) {
		status.Attack += this.rate;
	}

	getMessage(): string {
		return `增加了${this.rate}点攻击`;
	}
	
	getDescription() {
		return `使用后增加*${this.rate}*点攻击`;
	}
}