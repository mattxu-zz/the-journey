import { Status } from "../../definitions";

export interface RoleActions {
	getDamage(status: Status): number;
	getDefend(status: Status): number;
}