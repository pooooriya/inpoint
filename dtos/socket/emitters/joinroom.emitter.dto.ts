import { IJoinRoomEmitter, Roles } from "types";

export class JoinRoomEmitter implements IJoinRoomEmitter {
    token: string;
    room: string;
    constructor({ token, room, }: IJoinRoomEmitter) {
        this.token = token;
        this.room = room;
    }
}

