import { Status } from '../../definitions';
import { getDamage } from '../../utils/damage';
import { getDefend } from '../../utils/defend';
import { RoleActions } from './definition';

export abstract class BaseRole implements RoleActions {
    getDamage(status: Status): number {
        const damage = getDamage(status);
        return damage;
    };
    getDefend(status: Status): number {
        return getDefend(status);
    };
}
