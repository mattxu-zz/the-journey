import { RoleType, SkillType } from "../../../definitions";
import { Dictionary } from "underscore";
import { Skill } from "../definition";
export function CharacterSkillRegister(type: SkillType, role: RoleType, level: number) {
    return function (constructor: Function) {
        CharacterSkillFactory.register(role, level, constructor);
        CharacterSkillFactory.registerType(type, constructor);
    }
}

export class CharacterSkillFactory {
    private static _characterSkills: Dictionary<any> = {};
    private static _skills: DictionaryString<any> = {};

    public static register(role: RoleType, level: number, skill: any) {
        const key = `${role}-${level}`;
        if (!this._characterSkills[key]) {
            this._characterSkills[key] = [];
        }
        this._characterSkills[key].push(skill);
    }

    public static registerType(type: SkillType, skill: any) {
        this._skills[type] = skill;
    }

    public static getByType(type: SkillType): Skill | null {
        const skill = this._skills[type];
        if (skill) {
            return new skill();
        }

        return null;
    }

    public static get(role: RoleType, level: number): any[] {
        const skills = this._characterSkills[`${role}-${level}`];
        if (skills) {
            return skills;
        }

        return [];
    }
}