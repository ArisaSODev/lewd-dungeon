
import Entity from "./Entity";

export default class Player extends Entity {
    
   
    move(targetRow: number, targetCol: number){ 
        this.Row = targetRow;
        this.Col = targetCol;  
    }
}

