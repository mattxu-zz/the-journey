import { WarriorParameter, AssasinParameter, KnightParameter } from './role-parameters';
import { RoleParameter } from './definition';
import { RoleType } from '../../definitions';

export class RoleParameterFactory {
    private static _roleParameters: DictionaryString<any> = {};

    public static registerRoleParameter(key: RoleType, roleParameter: any) {
        this._roleParameters[key] = roleParameter;
    }

    public static getRoleParameter(key: RoleType): RoleParameter | null {
        const roleParameter = this._roleParameters[key];
        if (roleParameter) {
            return new roleParameter();
        }

        return null;
    }
}

RoleParameterFactory.registerRoleParameter(RoleType.Warrior, WarriorParameter);
RoleParameterFactory.registerRoleParameter(RoleType.Assasin, AssasinParameter);
RoleParameterFactory.registerRoleParameter(RoleType.Knight, KnightParameter);
