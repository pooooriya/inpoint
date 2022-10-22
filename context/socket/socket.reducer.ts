import { Socket } from "socket.io-client";
import { ISocketContextAction, ISocketContextState } from "types";
import { SocketContextActionType } from "types/context/context";

export const SocketReducer = (state: Socket | undefined, action: ISocketContextAction): ISocketContextState => {
    switch (action.type) {
        case SocketContextActionType.SOCKET_UPDATED:
            return { ...state, socket: action.payload as Socket }
        default:
            return state;
    }
}