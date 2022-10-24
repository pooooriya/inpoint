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
    NEW_PRIVATE_MESSAGE_RECIEVED = "pmessage"
}
