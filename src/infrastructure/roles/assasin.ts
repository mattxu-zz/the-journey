import { BaseRole } from './base';
import { Status } from '../../definitions';
import { judge } from '../../utils/percentage';
import { RoleActions } from './definition';
import { getDefend } from '../../utils/defend';
import MessageService from '../../utils/message';

/*
    Assasin-刺客
    防御时10%几率防御减半
    10%几率闪避攻击
*/
export class Assasin extends BaseRole implements RoleActions {
    defendPercent = 0.1;
    defendRate = 0.5;
    getDefend(status: Status): number {
        let defend = getDefend(status);
        if (judge(this.defendPercent)) {
            defend *= this.defendRate;
            MessageService.warning(`你被击溃了！`);
        }
        return defend;
    }
}
