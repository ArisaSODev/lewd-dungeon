export class Cell {
    terrain: string;
    walkable: boolean;
    
    constructor(
        terrain: string,
        walkable: boolean,
       
    ) {
        this.terrain = terrain;
        this.walkable = walkable;

    }
}