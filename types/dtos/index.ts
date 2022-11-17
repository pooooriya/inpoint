import { Roles } from "types";

export interface IJoinRoomEmitter {
    token: string,
    room: string,
}


export interface IDeleteMessageEmitter {
    messageId: number,
    room: string
}

export interface ISendMessageEmitter {
    type: Roles,
    room: string,
    text: string
}