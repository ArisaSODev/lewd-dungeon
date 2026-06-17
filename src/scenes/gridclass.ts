import Phaser from "phaser";
import {Grid} from '../world/Grid';
import { mapData } from "../world/terrains/TTypes";
import Player from "../entities/Player";
import map0 from "../world/terrains/maps/map0";// i need solve this, is fking stressing!!!!


export default class GameScene extends Phaser.Scene{// extends declara herencia

    //controls
    private keys!: any;
    private grid!: Grid;
  
    private player!: Player;
    private playerSprite!: Phaser.GameObjects.Image;
    private entitiesSprite!: Phaser.GameObjects.Image;

    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("ground", "assets/img/ground.png");
        this.load.image("char", "assets/img/char.png");
        this.load.image("wall", "assets/img/wall.png");
        this.load.image("User", "assets/img/User.png");
    }

    create(): void {
        const tileSize = 64;

        //grid cells
        this.grid = new Grid(map0);

        console.log(this.grid.entitylist)
        
        console.log(this.grid.occupacymap)
        

        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0xffff00);

        for (let y = 0; y < this.grid.height; y++) {
          
            for (let x = 0; x < this.grid.width; x++) {
                 

                    const cell = this.grid.cells[y][x];

                    this.add.image(
                        x * tileSize + tileSize / 2,
                        y * tileSize + tileSize / 2,
                        cell.terrain
                    );
            }
        }

        //identify player

        for(let i=0; i<this.grid.entitylist.length; i++){
            let nowent = this.grid.entitylist[i]
            if (nowent.Asset == "User"){
                this.player = nowent            
                    
                console.log(nowent.Asset)

                this.playerSprite = this.add.image( // the graphic actualization
                this.player.Col * tileSize + tileSize / 2,
                this.player.Row * tileSize + tileSize / 2,
                this.player.Asset
                );
            }else{

            this.entitiesSprite = this.add.image(
            nowent.Col * tileSize + tileSize / 2,
            nowent.Row * tileSize + tileSize / 2,
            nowent.Asset
            );
            }
        }


     
        this.keys = this.input.keyboard!.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });
    }

    update(): void {
    
    //moves player
    if (Phaser.Input.Keyboard.JustDown(this.keys.W)) {
        this.grid.MoveEntity(this.player, [0, -1]); // more is down
        console.log(this.grid.occupacymap)
    }
    if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
        this.grid.MoveEntity(this.player, [0, 1]);
        console.log(this.grid.occupacymap)
    }
    if (Phaser.Input.Keyboard.JustDown(this.keys.A)) {
        this.grid.MoveEntity(this.player, [-1, 0]);
        console.log(this.grid.occupacymap)
    }
    if (Phaser.Input.Keyboard.JustDown(this.keys.D)) {
        this.grid.MoveEntity(this.player, [1, 0]);
        console.log(this.grid.occupacymap)
    }

    this.playerSprite.setPosition(
        this.player.Row * 64 + 32,
        this.player.Col * 64 + 32
    );
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