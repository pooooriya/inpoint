import { Socket } from 'socket.io-client';

export type AppContextIntialStateType = {
    chats: IChatContextState
    socket: Socket | undefined
}

export interface IChatContextState {
    publicMessages: any
    privateMessages: any
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
      زمانی که چت جدیدی به قسمت چت عمومی اضافه شود
     */
    NEW_MESSAGES_ADDED_TO_PUBLIC_CHAT = 'NEW_MESSAGES_ADDED_TO_PUBLIC_CHAT',
    /**
   * زمانی که چت جدیدی به قسمت چت خصوصی اضافه شود
   */
    NEW_MESSAGES_ADDED_TO_PRIVATE_CHAT = 'NEW_MESSAGES_ADDED_TO_PRIVATE_CHAT',
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

export interface IChatContextAction extends IContextAction<ChatContextActionType, IChatContextState> { }


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


export interface IAuthContextAction extends IContextAction<AuthContextActionType, any> { }
