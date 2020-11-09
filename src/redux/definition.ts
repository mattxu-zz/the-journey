import { Character, Monster } from "../definitions";
import { GameMap } from "../infrastructure/map-builder/definition";

export interface BattleState {
    character?: Character,
    monster?: Monster,
    success: boolean,
    mapItemId?: string,
    reports?: BattleReport[],
    currentDamage?: BattleDamage,
    currentMonsterDamage?: BattleDamage,
    lock: boolean,
}

export interface BattleDamage {
    type: DamageType,
    value: Number
}

export enum DamageType {
    Common,
    Critical,
    Bloodsucking,
}

export interface BattleReport {
    id: string;
    time: Date,
    content: string,
    type: BattleReportType
}

export enum BattleReportType {
    characterAttack,
    monsterAttack,
    characterCritical,
    monsterCritical,
    characterSuck,
    characterDodge,
    monsterSuck,
    monsterDodge
}

export enum BattleActionType {
    INIT_BATTLE = 'INIT_BATTLE',
    CHARACTER_ATTACK = 'CHARACTER_ATTACK',
    MONSTER_ATTACK = 'MONSTER_ATTACK',
    CLEAR_BATTLE = 'CLEAR_BATTLE',
    CHARACTER_USE_SKILL = 'CHARACTER_USE_SKILL',
    LOCK = 'LOCK',
}

export interface GameState {
    character?: Character,
    success: boolean,
    map?: GameMap,
    mapLocked: boolean,
    characterStatusDrawerVisible: boolean,
}

export enum GameActionType {
    SET_CHARACTER = 'SET_CHARACTER',
    INIT_MAP = 'INIT_MAP',
    LOCK_MAP = 'LOCK_MAP',
    UNLOCK_MAP = 'UNLOCK_MAP',
    NEXT_MAP_LEVEL = 'NEXT_MAP_LEVEL',
    PASS_MAP_ITEM = 'PASS_MAP_ITEM',
    GAME_OVER = 'GAME_OVER',
    GAIN_EXP = 'GAIN_EXP',
    OPEN_CHARACTER_STATUS_DRAWER = 'OPEN_CHARACTER_STATUS_DRAWER',
    CLOSE_CHARACTER_STATUS_DRAWER = 'CLOSE_CHARACTER_STATUS_DRAWER',
    SHOW_MAP_ITEM = 'SHOW_MAP_ITEM',
    SET_CHARACTER_STATUS = 'SET_CHARACTER_STATUS',
    USE_STATUS_POINT = 'USE_STATUS_POINT',
    DROP_ITEM = 'DROP_ITEM',
    USE_ITEM = 'USE_ITEM',
    START_NEW_GAME = 'START_NEW_GAME',
    TAKEON_EQUIPMENT = 'TAKEON_EQUIPMENT',
    TAKEOFF_EQUIPMENT = 'TAKEOFF_EQUIPMENT',
    GAIN_MONEY = 'GAIN_MONEY',
    SET_STORE = 'SET_STORE',
    USE_SKILLPOINT = 'USE_SKILLPOINT',
}