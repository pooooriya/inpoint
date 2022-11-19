import { Roles } from "types/auth"

export enum SocketListenerEvents {
    /**
     * زمانی که سوکت متصل میشود این ایونت صدا زده میشود
     */
    SOCKET_CONNECTED = "connect",
    SOCKET_DISCONNECTED = "disconnect",
    /**
   * زمانی که پیامی از سمت سیستم (چت عمومی یا نوتیفیکیشن) ارسال شود 
   */
    NEW_MESSAGE_RECIEVED = "message",
    /**
     * زمانی که چت خصوصی از سمت سیستم ارسال شود 
     */
    GET_ALL_MESSAGES = "pmessage",

    GET_ALL_PARTICPANTS_LIST = "roomUsers",
    GET_NEW_VOTE_FROM_HOST_SIDE = "getVoteTeacher",
    GET_NEW_VOTE_FROM_CLIENT_SIDE = "getVoteStudent",
    NEW_VOTE_CREATED = 'newVoteCreated',

}





export enum SocketEventEmitter {
    TOGGLE_PRIVATE_CHAT = 'privateChat',

    /** 
     * زمانی که کاربر وارد روم میشود این ایونت استفاده میشود
      */
    USER_JOIN_ROOM = "joinRoom",
    /**
      * ارسال پیام به سمت سیستم از طریق چت
      */
    SEND_NEW_MESSAGE = "chatMessage",
    /**
     *حذف پیام توسط میزبان
     */
    DELETE_MESSAGE_BY_HOST = "deleteMessage",
    TOGGLE_DISABLE_CHAT = "disableChat",
    CREATE_NEW_VOTE = 'createVote',
    ANSWER_VOTE = 'answerVote'

}

export enum NotificationTypes {
    NOTIFICATION = "NOTIFICATION",
    MESSAGE = "MESSAGE"
}

export interface ISocketChatResponse {
    fullName: string,
    text: string,
    type: NotificationTypes
    time: string,
    messageId: number,
    room: string
}


export interface IEventParticipantResponse {
    fullName: string,
    id: string,
    room: string,
    type: Roles,
    uuid: string
}
