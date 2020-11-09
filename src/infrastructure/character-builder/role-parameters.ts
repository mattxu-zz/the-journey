import { RoleParameter } from "./definition";
import { RoleType } from "../../definitions";

export class WarriorParameter implements RoleParameter {
    Type = RoleType.Warrior;    
    HpRange = [530, 550];
    MpRange = [0, 0];
    AttackRange = [130, 150];
    DefendRange = [110, 120];
    Critical = 0.05;
    Dodge = 0;
    Bloodsucking = 0.1;
    BloodsuckingRate = 0.1;
}

export class KnightParameter implements RoleParameter {
    Type = RoleType.Knight;    
    HpRange = [530, 550];
    MpRange = [80, 100];
    AttackRange = [110, 120];
    DefendRange = [170, 180];
    Critical = 0;
    Dodge = 0;
    Bloodsucking = 0;
    BloodsuckingRate = 0;
}

export class AssasinParameter implements RoleParameter {
    Type = RoleType.Assasin;    
    HpRange = [380, 400];
    MpRange = [40, 50];
    AttackRange = [230, 250];
    DefendRange = [90, 100];
    Critical = 0.1;
    Dodge = 0.1;
    Bloodsucking = 0;
    BloodsuckingRate = 0;
}