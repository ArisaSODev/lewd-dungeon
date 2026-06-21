import  Cell  from './Cell';
import  {TTable}  from './terrains/TTable';
import  Player  from '../entities/Player';
import Entity from '../entities/Entity';

//persiste the logical error, axis inversed

interface EntityData {
    Row: number;
    Col: number;
    Asset: string;
}

interface MapData {
    terrain: number[][];
    entity: EntityData[];
}

export default class Grid {
    width: number;
    height: number;
    cells: Cell[][];
    occupacymap: (Entity | null)[][];
    entitylist: (Entity | Player)[];

    constructor(mapData: MapData) {
        this.height = mapData.terrain.length;
        this.width = mapData.terrain[0].length;
        this.cells = [];
        this.occupacymap = [];
        this.entitylist = [];

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
    
        for (let i = 0; i < mapData.entity.length; i++){
        
            let objetiveCol = mapData.entity[i].Col
            let objetiveRow = mapData.entity[i].Row
            
            let ent! : (Player | Entity)

            if (this.occupacymap[objetiveCol][objetiveRow] == null){ //no overlay
                

                if (mapData.entity[i].Asset == "User"){
                    ent = new Player(objetiveRow, objetiveCol, mapData.entity[i].Asset);
                }else{
                    ent = new Entity(objetiveCol, objetiveRow, mapData.entity[i].Asset); // wtf, i need sovle it
                }
                this.entitylist.push(ent)

                this.occupacymap[objetiveCol][objetiveRow] = ent
            
            }
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

    

        if (cell.walkable == true){
            if(occupant == null){
                this.occupacymap[e.Col    ][e.Row    ] = null; //the error was solved with declare occupacy map as player | null
                
                e.move(targetRow,targetCol);
                
                this.occupacymap[targetCol][targetRow] = e;
                return 0;
            }
        }
    }
}