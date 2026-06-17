import Entity from "./Entity";

export default class Goblin extends Entity {
    constructor(row: number, col: number) {
        super(row, col, "goblin");
    }
}