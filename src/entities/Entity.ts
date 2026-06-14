export default class Entity {
    Row: number;
    Col: number;
    asset: string;

    constructor(row: number, col: number, asset: string) {
        this.Row = row;
        this.Col = col;
        this.asset = asset;
    }

    move(row: number, col: number) {
        this.Row = row;
        this.Col = col;
    }
}