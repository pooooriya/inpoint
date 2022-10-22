import { AppContextIntialStateType, IChatContextAction, IChatContextState } from "types";
import { ChatContextActionType } from "types";

export const ChatReducer = (state: IChatContextState, action: IChatContextAction): IChatContextState => {
    switch (action.type) {
        case ChatContextActionType.NEW_MESSAGES_ADDED_TO_PUBLIC_CHAT:
            return { ...state, publicMessages: [...state.publicMessages, action.payload] }
        case ChatContextActionType.NEW_MESSAGES_ADDED_TO_PRIVATE_CHAT:
            return { ...state, privateMessages: [...state.privateMessages, action.payload] }
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