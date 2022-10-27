import { IJoinRoomEmitter, Roles } from "types";

export class JoinRoomEmitter implements IJoinRoomEmitter {
    fullName: string;
    room: string;
    uuid: string;
    type: Roles;
    constructor({ fullName, room, uuid, type }: IJoinRoomEmitter) {
        this.fullName = fullName;
        this.room = room;
        this.uuid = uuid;
        this.type = type;
    }
}

