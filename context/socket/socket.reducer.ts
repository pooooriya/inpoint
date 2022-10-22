import { Socket } from "socket.io-client";
import { ISocketContextAction, SocketContextActionType, AppContextIntialStateType } from "types";

export const SocketReducer = (state: AppContextIntialStateType, action: ISocketContextAction): AppContextIntialStateType => {
    switch (action.type) {
        case SocketContextActionType.SOCKET_UPDATED:
            return { ...state, socket: action.payload as Socket }
        default:
            return state;
    }
}