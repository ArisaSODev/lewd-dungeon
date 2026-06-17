import { Cell } from './Cell';
import { TTable } from './terrains/TTable';
import  Player  from '../entities/Player.ts';

export class Grid {
    width: number;
    height: number;
    cells: Cell[][];
    occupacymap: (Player | null)[][];// sustituir por entidades


    constructor(mapData: number[][]) {
        this.height = mapData.length;
        this.width = mapData[0].length;
        this.cells = [];
        this.occupacymap = [];


        for (let y = 0; y < this.height; y++) {

            const row: Cell[] = [];

            const rowo:Player[]=[]; 

            for (let x = 0; x < this.width; x++) {

                const tileId = mapData[y][x];


                const terrainInfo = TTable[tileId];

                


                const cell = new Cell(
                    terrainInfo.terrain,
                    terrainInfo.walkable
                );

                row.push(cell);
                rowo.push(null);
            }

            this.cells.push(row);
            this.occupacymap.push(rowo);
        }
    }

    getCell(row: number, col: number){
        return this.cells[col][row];
    }

    getOccupancy(row: number, col:number){

            return this.occupacymap[col][row]

    }

    
    MoveEntity(e : Player, pos : number[]){ 

        const targetRow = e.Row + pos[0];
        const targetCol = e.Col + pos[1];

        //map limit
        console.log(targetRow, targetCol);
        if (targetRow < 0 || targetCol < 0) {
            console.log("limites del mundo");
            return 1;    
        }

        if (targetRow >= this.height || targetCol >= this.width) {
            console.log("limites del mundo");
            return 1;
        }

        const cell = this.getCell(targetRow, targetCol);
        let occupant = this.getOccupancy(targetRow, targetCol);

        console.log(cell);

        if (cell.walkable == true){
            if(occupant == null){
                this.occupacymap[e.Col    ][e.Row    ] = null; //i dont get the error
                
                e.move(targetRow,targetCol);
                
                this.occupacymap[targetCol][targetRow] = e;
                return 0;
            }
        }
    }
}