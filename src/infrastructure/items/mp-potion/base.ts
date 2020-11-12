import { ItemActions } from "../definition";
import { Status } from "../../../definitions";

export default abstract class BaseMpPotion implements ItemActions {
	price!: number;
	cureRate = 0;
	use(status: Status) {
		const newMP = Math.round(status.MP + this.cureRate * status.MaxMP);
		status.MP = newMP > status.MaxMP ? status.MaxMP: newMP;
	}

	getMessage(): string {
		return `恢复了${this.cureRate * 100}%MP`;
	}
	
	getDescription() {
		return `使用后恢复${this.cureRate * 100}%的MP`;
	}
}