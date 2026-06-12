import Phaser from "phaser";
import {Grid} from '../world/Grid';
import { mapData } from "../world/terrains/TTypes";

export default class GameScene extends Phaser.Scene{// extends declara herencia

    private grid!: Grid;

    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("ground", "assets/img/ground.png");
        this.load.image("wall", "assets/img/wall.jpeg");
    }

    create(): void {
        console.log("create ejecutado");
        this.grid = new Grid(mapData);

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffff00);

        const tileSize = 64; //Tamaño de cell

        for (let y = 0; y < this.grid.height; y++) {
               console.log("for y");
            for (let x = 0; x < this.grid.width; x++) {
                   console.log("antes de stroke");

                    const cell = this.grid.cells[y][x];

                    this.add.image(
                        x * tileSize + tileSize / 2,
                        y * tileSize + tileSize / 2,
                        cell.terrain
                    );
            }
        }
       console.log("fin create");
    }
}



// CICLO DE VIDA DEL COMUNISMO (SCENA)

//constructor()
//    ↓
//preload()   (si existe)
//    ↓
//create()
//    ↓
//update()    (muchas veces por segundo)