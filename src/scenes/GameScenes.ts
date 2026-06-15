<<<<<<< HEAD
import Phaser from 'phaser';

export default class GameScenes extends Phaser.Scene {

    constructor() {
        super('GameScenes');
    }

    // aqui se cargan los assets
    preload() {
        this.load.image("ground","assets/img/ground.jpeg")
        console.log('preload');
    }





create() {

    const map = this.make.tilemap({
        tileWidth: 32,
        tileHeight: 32,
        width: 100,
        height: 100
    });

}



    update() {
        // Se ejecuta cada frame
    }
=======
import Phaser from 'phaser';

export default class GameScenes extends Phaser.Scene {

    constructor() {
        super('GameScenes');
    }

    // aqui se cargan los assets
    preload() {
        this.load.image("ground","assets/img/ground.jpeg")
        console.log('preload');
    }





create() {

    const map = this.make.tilemap({
        tileWidth: 32,
        tileHeight: 32,
        width: 100,
        height: 100
    });

}



    update() {
        // Se ejecuta cada frame
    }
>>>>>>> 817d57625342d6f18d904cd82f086dda8febd66a
}