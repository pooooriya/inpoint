import { Socket } from "socket.io-client";
import { ISocketContextAction, SocketContextActionType, } from "types";
export const SocketReducer = (state: Socket | undefined, action: ISocketContextAction): Socket | undefined => {
    switch (action.type) {
        case SocketContextActionType.SOCKET_CONNECTED:
            return state ?? action.payload;
        default:
            return state;
    }
}