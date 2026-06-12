export class Cell {
    terrain: string;
    walkable: boolean;
//    ref: string;

    constructor(
        terrain: string,
        walkable: boolean,
       // ref: string,
    ) {
        this.terrain = terrain;
        this.walkable = walkable;
//        this.ref = ref; 
    }
}