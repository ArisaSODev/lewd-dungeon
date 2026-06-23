import Room from './Room';
import * as maps from './terrains/maps/index';
import choice from '../systems/numts/random/choice';

export default class World {
    matrix: Room[][];
    public initroom: Room;

    getRoom(x: number, y: number): Room | null {
        return this.matrix[y][x];
    }

    constructor(total_room: number, x_size: number, y_size: number) {
        this.matrix = [];
        for (let i = 0; i < y_size; i++) {
            const row: Room[] = [];
            for (let j = 0; j < x_size; j++) {
                row.push(null as unknown as Room);
            }
            this.matrix.push(row);
        }

        //init room
        let origin = {
            x: Math.floor(x_size / 2),
            y: Math.floor(y_size / 2)   
        }

        this.initroom = new Room(choice(maps.default), origin.x, origin.y);
        this.matrix[origin.y][origin.x] = this.initroom;
        
        let currentRoom = this.initroom;
        for (let i = 1; i < total_room; i++) {
            let expand = choice([[0,1],[1,0],[0,-1],[-1,0]]);
            let increase = expand;

            let validSpace = true;
            while (validSpace) {

                //validation
                if (currentRoom.x + expand[0] < 0 || currentRoom.x + expand[0] >= x_size || currentRoom.y + expand[1] < 0 || currentRoom.y + expand[1] >= y_size) {
                    validSpace = false;
                    break;
                }

                if (this.matrix[currentRoom.y + expand[1]][currentRoom.x + expand[0]] == null) {
                    this.matrix[currentRoom.y + expand[1]][currentRoom.x + expand[0]] = new Room(choice(maps.default), currentRoom.x + expand[0], currentRoom.y + expand[1]);
                    //update the new currentRoom
                    currentRoom = this.matrix[currentRoom.y + expand[1]][currentRoom.x + expand[0]];
                    break; 
                } else{
                    expand[0] += increase[0];
                    expand[1] += increase[1];
                }
            }
        } 
    
    }
}