import { BaseRole } from './base';
import { Status } from '../../definitions';
import { judge } from '../../utils/percentage';
import { RoleActions } from './definition';
import { getDefend } from '../../utils/defend';
import MessageService from '../../utils/message';

/*
		Knight-骑士
		防御时几率提高防御指数
		几率： 10%
		倍数： 1.5
*/
export class Knight extends BaseRole implements RoleActions {
	defendPercent = 0.1;
	defendRate = 1.5;
	getDefend(status: Status): number {
		let defend = getDefend(status);
		if (judge(this.defendPercent)) {
			defend *= this.defendRate;
			MessageService.success(`坚不可破！`);
		}

		return defend;
	}
}
