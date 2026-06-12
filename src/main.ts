//importa desde node_modules
import Phaser from 'phaser';

//declaro cada escena
import GameScenes from './scenes/GameScenes.ts';
import grid1 from './scenes/grid1.ts';
import grid2 from './scenes/gridclass.ts';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 640,
    height: 1280,
    scene: [
      //  GameScenes,
  
     
        grid2,
//        GameScenes,
//        grid1,
    ]
};

new Phaser.Game(config);