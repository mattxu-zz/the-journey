export enum MapType {
    Battle,
    Event,
    BossBattle,
    Store,
    Exit
}

export interface MapItem {
    Id: string,
    Type: MapType,
    Description: string,
    Content?: any,
    Passed: boolean,
    Show: boolean,
}

export interface GameMap {
    Id: string,
    Name: string,
    Items: MapItem[],
    Level: number
}