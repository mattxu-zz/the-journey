import { RoleType } from "../../definitions";
import { Skill } from "../skills/definition";

export interface RoleParameter {
    Type: RoleType,
    HpRange: number[],
    MpRange: number[],
    AttackRange: number[],
    DefendRange: number[],
    Critical: number,
    Dodge: number,
    Bloodsucking: number,
    BloodsuckingRate: number,
    AllSkills?: Skill[],
}