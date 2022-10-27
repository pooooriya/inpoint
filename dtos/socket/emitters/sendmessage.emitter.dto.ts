import { Roles } from "types";
import { ISendMessageEmitter } from "types/dtos";

export class SendMessageEmitter implements ISendMessageEmitter {
    type: Roles;
    room: string;
    text: string;
    constructor({ text, room, type }: ISendMessageEmitter) {
        this.text = text;
        this.room = room;
        this.type = type;
    }
}

