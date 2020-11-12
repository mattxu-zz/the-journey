import { ItemActions } from "../definition";
import { Status } from "../../../definitions";

export abstract class BaseHemostasis implements ItemActions {
	price!: number;
	cureRate = 0;
	use(status: Status) {
		const newHP = Math.round(status.HP + this.cureRate * status.MaxHP);
		status.HP = newHP > status.MaxHP ? status.MaxHP: newHP;
	}

	getMessage(): string {
		return `恢复了${this.cureRate * 100}%生命值`;
	}
	
	getDescription() {
		return `使用后恢复${this.cureRate * 100}%生命值`;
	}
}