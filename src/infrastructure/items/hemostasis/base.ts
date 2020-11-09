import { ItemActions } from "../definition";
import { Status } from "../../../definitions";

export abstract class BaseHemostasis implements ItemActions {
	price!: number;
	cureRate = 0;
	use(status: Status) {
		if ((status.MaxHP - status.HP) <= this.cureRate) {
			this.cureRate = status.MaxHP - status.HP;
			status.HP = status.MaxHP;
			return;
		}
		status.HP += this.cureRate;
	}

	getMessage(): string {
		return `恢复了${this.cureRate}点生命值`;
	}
	
	getDescription() {
		return `使用后恢复*${this.cureRate}*点生命值`;
	}
}