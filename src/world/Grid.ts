import { Cell } from './Cell';
import { TTable } from './terrains/TTable';

export class Grid {
    width: number;
    height: number;
    cells: Cell[][];

    constructor(mapData: number[][]) {
        this.height = mapData.length;
        this.width = mapData[0].length;
        this.cells = [];

        for (let y = 0; y < this.height; y++) {

            const row: Cell[] = [];

            for (let x = 0; x < this.width; x++) {

                const tileId = mapData[y][x];

                const terrainInfo = TTable[tileId];

                const cell = new Cell(
                    terrainInfo.terrain,
                    terrainInfo.walkable
                );

                row.push(cell);
            }

            this.cells.push(row);
        }
    }
}