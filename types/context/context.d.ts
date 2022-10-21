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

export type ChatContextActionType =
    "add_to_public_messages" |
    "add_to_private_messages" |
    "chat_disabled" |
    "public_chat_activated" |
    "private_chat_activated" |
    "private_chat_deactivated"

export interface IChatContextAction extends IContextAction<ChatContextActionType, any> { }

export interface IContextAction<T, K> {
    type: T
    payload: K
}

export type SocketContextActionType = "update_socket"
export interface ISocketContextAction extends IContextAction<SocketActionType, any> { }



// type UserContextState = {
//     userId: string;
//     role: string;
//     name: string;
//     accessToken: string;
//     isAuthenitcated: boolean
// }