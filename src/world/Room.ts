import grid from './Grid';

interface EntityData {
    Row: number;
    Col: number;
    Asset: string;
}

interface MapData {
    terrain: number[][];
    entity: EntityData[];
}


export default class Room {
    grid: grid;
    x: number;
    y: number;   
    north: Room | null = null;
    south: Room | null = null;
    east: Room | null = null;
    west: Room | null = null;

    constructor(mapData: MapData, x: number, y: number) {
        this.grid = new grid(mapData);
        this.x = x;
        this.y = y;
        this.north = null;
        this.south = null;
        this.east = null;
        this.west = null;
    }

}