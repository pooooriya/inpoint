import { Roles } from "types";

export interface IJoinRoomEmitter {
    fullName: string,
    room: string,
    uuid: string,
    type: Roles
}

export interface ISendMessageEmitter {
    type: Roles,
    room: string,
    text: string
}