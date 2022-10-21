import { IChatContextAction, IChatContextState } from "types";
export const ChatReducer = (state: IChatContextState, action: IChatContextAction): IChatContextState => {
    switch (action.type) {
        case "add_to_public_messages":
            return { ...state, publicMessages: action.payload }
        case "add_to_private_messages":
            return { ...state, privateMessages: action.payload }
        case "public_chat_activated":
        case "private_chat_deactivated":
            return { ...state, isPrivate: false }
        case "chat_disabled":
            return { ...state, isActive: false }
        case "private_chat_activated":
            return { ...state, isPrivate: true }
        default:
            return state;
    }
}