import { Socket } from 'socket.io-client';
import { Roles } from 'types/auth';
import { IEventParticipantResponse, ISocketChatResponse } from 'types/socket';

export type AppContextIntialStateType = {
    chats: IChatContextState
    socket: Socket | undefined
    notification: INotificationContextState
    auth: IAuthContextState
    event: IEventContextState
    vote: IVoteContextState
}

export interface IAuthContextState {
    isAuthenticated: boolean
    username: string
    role: Roles | null
    accessToken: string
}

export interface IEventContextState {
    title: string
    description: string
    player: string
    settings: any[]
    link: string
    participants: IEventParticipantResponse[]
}

export interface IChatContextState {
    messages: ISocketChatResponse[]
    isPrivate: boolean
    isActive: boolean
}

export type VoteQuestion = {
    content: string,
    id: number,
    isAnswer: boolean,
    point: number,
    percent: string
}

export interface IVoteContextState {
    userIsAnswered: boolean,
    userAnswer: number,
    hasNewVote: boolean,
    showAnswer: boolean,
    title: string
    questions: VoteQuestion[]
    answers: [],
    trueAnswer: number
    needResetVote: boolean
}

export enum VoteContextActionType {
    NEW_VOTE_RECIEVED = 'NEW_VOTE_RECIEVED',
    VOTE_CHECKED = 'VOTE_CHECKED',
    USER_ANSWERED_VOTE = 'USER_ANSWERED_VOTE',
    RESET_VOTE = 'RESET_VOTE',
    UNDO_RESET_VOTE = 'UNDO_RESET_VOTE',
    USER_RESET_ANSWERS = "USER_RESET_ANSWERS"
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
    /**
     * زمانی که چت توسط ادمین پاک میشود
     */
    MESSAGE_HAS_BEEN_REMOVED = "MESSAGE_HAS_BEEN_REMOVED"
}

export interface IChatContextAction extends IContextAction<ChatContextActionType, any> { }


export enum EventContextActionType {
    EVENT_INFORMATION_COMPLETED = "EVENT_INFORMATION_COMPLETED",
    PARTICPANT_LIST_RECIEVIED = "PARTICPANT_LIST_RECIEVIED"
}
export interface IEventContextAction extends IContextAction<EventContextActionType, any> { }


export enum AuthContextActionType {
    AUTH_COMPLETED = "AUTH_COMPLETED",
    NEED_COMPLETE_INFORMATION = "SNEED_COMPLETE_INFORMATION"
}
export interface IAuthContextAction extends IContextAction<AuthContextActionType, any> { }


export interface IContextAction<T, K> {
    type: T
    payload?: K
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

export enum NotificationType {
    NOTIFICATION_RAISED = "NOTIFICATION_RAISED",
    CLEAR_NOTIFICATION = "CLEAR_NOTIFICATION",
}

export interface INotificationContextState {
    message: React.ReactNode,
    isShow: boolean,
};



export interface INotificationContextAction extends IContextAction<NotificationType, any> { }


export interface IVoteContextAction extends IContextAction<VoteContextActionType, any> { }
