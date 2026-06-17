import { Cell } from './Cell';
import { TTable } from './terrains/TTable';
import  Player  from '../entities/Player';
import Entity from '../entities/Entity';



interface EntityData {
    Row: number;
    Col: number;
    Asset: string;
}

interface MapData {
    terrain: number[][];
    entity: EntityData[];
}

export class Grid {
    width: number;
    height: number;
    cells: Cell[][];
    occupacymap: (Entity | null)[][];// sustituir por entidades


    constructor(mapData: MapData) {
        this.height = mapData.terrain.length;
        this.width = mapData.terrain[0].length;
        this.cells = [];
        this.occupacymap = [];


        for (let y = 0; y < this.height; y++) {

            const row: Cell[] = [];

            const rowo:(Entity | null)[]=[]; 

            for (let x = 0; x < this.width; x++) {

                const tileId = mapData.terrain[y][x];


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

        //logical init of entities

        let objetiveCol = mapData.entity[0].Col
        let objetiveRow = mapData.entity[0].Row
        
        if (this.occupacymap[objetiveCol][objetiveRow] == null){ //no overlay
            
            this.occupacymap[objetiveCol][objetiveRow] = new Player(objetiveCol, objetiveRow, mapData.entity[0].Asset)
            
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