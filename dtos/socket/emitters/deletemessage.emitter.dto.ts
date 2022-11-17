import { IDeleteMessageEmitter, Roles } from "types";

export class DeleteMessageEmitter implements IDeleteMessageEmitter {
    messageId: number;
    room: string
    constructor({ messageId, room }: IDeleteMessageEmitter) {
        this.messageId = messageId;
        this.room = room;
    }
    ;
}

