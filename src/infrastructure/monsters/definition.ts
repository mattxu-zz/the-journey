import { Status } from "../../definitions";

export interface MonsterActions {
    getDamage(status: Status): number;
    getDefend(status: Status): number;
}