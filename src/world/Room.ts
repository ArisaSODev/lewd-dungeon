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

    //this is not sync with te current rooms
    generateDoors(matrix: Room[][]) {
        let here = this;
        let x = this.x;
        let y = this.y;

        let ylim = this.grid.width;
        let xlim = this.grid.height;

        //north
        if( matrix[x][y+1] != null){
            

            this.grid.cells[Math.floor(ylim/2)][xlim-1].terrain = "door";
            this.grid.cells[Math.floor(ylim/2)][xlim-1].walkable = true;
            console.log("ylim: " + ylim);
            console.log("xlim: " + xlim);
        }

        //east
         if( matrix[x+1][y] != null){
            

            this.grid.cells[ylim-1][Math.floor(xlim/2)].terrain = "door";
            this.grid.cells[ylim-1][Math.floor(xlim/2)].walkable = true;
            console.log("ylim: " + ylim);
            console.log("xlim: " + xlim);
        }
        //south
        if( matrix[x][y-1] != null){
            this.grid.cells[Math.floor(ylim/2)][0].terrain = "door";
            this.grid.cells[Math.floor(ylim/2)][0].walkable = true;
            console.log("ylim: " + ylim);
            console.log("xlim: " + xlim);
        }
        //west
         if( matrix[x-1][y] != null){
            

            this.grid.cells[0][Math.floor(xlim/2)].terrain = "door";
            this.grid.cells[0][Math.floor(xlim/2)].walkable = true;
            console.log("ylim: " + ylim);
            console.log("xlim: " + xlim);
        }

    //gridclass.ts:127 Uncaught TypeError: Cannot read properties of null (reading 'grid')
    //at GameScene.update (gridclass.ts:127:49)

    
    }
}