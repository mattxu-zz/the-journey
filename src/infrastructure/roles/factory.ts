import { RoleType } from '../../definitions';
import { Warrior } from './warrior';
import { Assasin } from './assasin';
import { Knight } from './knight';
import { RoleActions } from './definition';

export class RolesFactory {
    private static _roles: DictionaryString<any> = {};

    public static registerRole(key: RoleType, role: any) {
        this._roles[key] = role;
    }

    public static getRole(key: RoleType): RoleActions | null {
        const role = this._roles[key];
        if (role) {
            return new role();
        }

        return null;
    }
}

RolesFactory.registerRole(RoleType.Warrior, Warrior);
RolesFactory.registerRole(RoleType.Assasin, Assasin);
RolesFactory.registerRole(RoleType.Knight, Knight);
