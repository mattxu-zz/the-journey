import { Status } from "../../definitions";

export interface ItemActions {
	price: number;
	use(status: Status): void;
	getMessage(): string;
	getDescription(): string;
}