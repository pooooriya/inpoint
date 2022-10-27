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

}


export enum SocketEventEmitter {
    /** 
     * زمانی که کاربر وارد روم میشود این ایونت استفاده میشود
      */
    USER_JOIN_ROOM = "joinRoom"
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
