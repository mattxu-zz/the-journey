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

const roles: DictionaryString<any> = {Warrior, Assasin, Knight};
Object.keys(roles).forEach((key) => {
    RolesFactory.registerRole(RoleType[key as keyof typeof RoleType], roles[key]);
});
