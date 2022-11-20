import { IChatContextAction, IChatContextState } from "types";
import { ChatContextActionType } from "types";

export const ChatReducer = (state: IChatContextState, action: IChatContextAction): IChatContextState => {
    switch (action.type) {
        case ChatContextActionType.GET_ALL_MESSAGES_CHAT:
            return { ...state, messages: [...state.messages, ...action?.payload] }
        case ChatContextActionType.MESSAGE_HAS_BEEN_REMOVED: {
            const perviousState = [...state.messages];
            const newMessages = perviousState.filter(n => n.messageId != action.payload);
            return { ...state, messages: newMessages }
        }
        case ChatContextActionType.NEW_MESSAGE_RECEIVED:
            return { ...state, messages: [...state.messages, action?.payload] }
        case ChatContextActionType.PRIVATE_MODE_CHAT_DEACTIVATED:
            return { ...state, isPrivate: false }
        case ChatContextActionType.CHAT_ROOM_GENERALLY_DISABLED:
            return { ...state, isActive: false }
        case ChatContextActionType.CHAT_ROOM_GENERALLY_ACTIVATED:
            return { ...state, isActive: true }
        case ChatContextActionType.PRIVATE_MODE_CHAT_ACTIVATED:
            return { ...state, isPrivate: true }
        default:
            return state;
    }
}