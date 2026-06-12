

import Phaser from 'phaser';

//import {ground} from '../assets/img/ground';

export default class GameScene extends Phaser.Scene {

    private readonly TILE_SIZE = 50;
    private readonly GRID_WIDTH = 10;
    private readonly GRID_HEIGHT = 10;

    constructor() {
        super('GameScene');
    }

    create(): void {
        this.drawGrid();
    }

    private drawGrid(): void {
        const graphics = this.add.graphics();

        graphics.lineStyle(1, 0x00ff00, 1);

        // Líneas verticales
        for (let x = 0; x <= this.GRID_WIDTH; x++) {
            graphics.moveTo(
                x * this.TILE_SIZE,
                0
            );

            graphics.lineTo(
                x * this.TILE_SIZE,
                this.GRID_HEIGHT * this.TILE_SIZE
            );
        }

        // Líneas horizontales
        for (let y = 0; y <= this.GRID_HEIGHT; y++) {
            graphics.moveTo(
                0,
                y * this.TILE_SIZE
            );

            graphics.lineTo(
                this.GRID_WIDTH * this.TILE_SIZE,
                y * this.TILE_SIZE
            );
        }

        graphics.strokePath();
    }
}