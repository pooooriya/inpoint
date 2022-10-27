import { Socket } from 'socket.io-client';
import { ISocketChatResponse } from 'types/socket';

export type AppContextIntialStateType = {
    chats: IChatContextState
    socket: Socket | undefined
    notification: INotificationContextState
}

export interface IChatContextState {
    messages: ISocketChatResponse[]
    isPrivate: boolean
    isActive: boolean
}


/**
 * Enum for Chat Action Types.
 * @readonly
 * @enum {string}
  ایونت های چت در سوکت
 */
export enum ChatContextActionType {
    /**
      در زمان شروع استریم تمامی چت ها را دریافت میکند
     */
    GET_ALL_MESSAGES_CHAT = 'GET_ALL_MESSAGES_CHAT',
    /**
در حین استریم چت ها را دونه به دونه دریافت میکند
*/
    NEW_MESSAGE_RECEIVED = 'NEW_MESSAGE_RECEIVED',
    /**
* زمانی که چت به شکل کامل غیرفعال میشود
*/
    CHAT_ROOM_GENERALLY_DISABLED = "CHAT_ROOM_GENERALLY_DISABLED",
    /**
* زمانی که چت به شکل کامل فعال میشود
*/
    CHAT_ROOM_GENERALLY_ACTIVATED = "CHAT_ROOM_GENERALLY_ACTIVATED",
    /**
* زمانی که چت خصوصی توسط هاست فعال میشود
*/
    PRIVATE_MODE_CHAT_ACTIVATED = "PRIVATE_MODE_CHAT_ACTIVATED",
    /**
* زمانی که چت خصوصی توسط هاست غیر فعال میشود
*/
    PRIVATE_MODE_CHAT_DEACTIVATED = "PRIVATE_MODE_CHAT_DEACTIVATED",
}

export interface IChatContextAction extends IContextAction<ChatContextActionType, any> { }


export interface IContextAction<T, K> {
    type: T
    payload: K
}

export enum SocketContextActionType {
    /**
     * وقتی سوکت متصل میشود آبجکت آن با این ایونت ذخیره میشود
     */
    SOCKET_CONNECTED = "SOCKET_CONNECTED"
}
export interface ISocketContextAction extends IContextAction<SocketContextActionType, Socket | undefined> { }

export enum AuthContextActionType {
    /**
   * زمانی که کاربر مجددا سعی میکند وارد روم شود در صورتی که قبلا وارد شده است
   */
    USER_ALREADY_EXIST = "USER_ALREADY_EXIST",
}

export interface IAuthContextState {
    name: string,
    userId: string,
    role: string,
}

export enum NotificationType {
    NOTIFICATION_RAISED = "NOTIFICATION_RAISED",
    CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION",
}

export interface INotificationContextState {
    message: React.ReactNode,
    isShow: boolean,
};
export interface INotificationContextAction extends IContextAction<NotificationType, any> { }
export interface IAuthContextAction extends IContextAction<AuthContextActionType, any> { }
