import { Roles } from "types";

export interface IJoinRoomEmitter {
    fullName: string,
    room: string,
    uuid: string,
    type: Roles
}