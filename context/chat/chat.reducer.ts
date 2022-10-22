import { AppContextIntialStateType, ChatContextActionType, IChatContextAction } from "types";

export const ChatReducer = (state: AppContextIntialStateType, action: IChatContextAction): AppContextIntialStateType => {
    switch (action.type) {
        case ChatContextActionType.NEW_MESSAGES_ADDED_TO_PUBLIC_CHAT:
            return { ...state, chats: { ...state.chats, publicMessages: action.payload } }
        case ChatContextActionType.NEW_MESSAGES_ADDED_TO_PRIVATE_CHAT:
            return { ...state, chats: { ...state.chats, privateMessages: action.payload } }
        case ChatContextActionType.PRIVATE_MODE_CHAT_DEACTIVATED:
            return { ...state, chats: { ...state.chats, isPrivate: false } }
        case ChatContextActionType.CHAT_ROOM_GENERALLY_DISABLED:
            return { ...state, chats: { ...state.chats, isActive: false } }
        case ChatContextActionType.CHAT_ROOM_GENERALLY_ACTIVATED:
            return { ...state, chats: { ...state.chats, isActive: true } }
        case ChatContextActionType.PRIVATE_MODE_CHAT_ACTIVATED:
            return { ...state, chats: { ...state.chats, isPrivate: true } }
        default:
            return state;
    }
}