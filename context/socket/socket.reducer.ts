import { Socket } from "socket.io-client";
import { ISocketContextAction, ISocketContextState } from "types";

export const SocketReducer = (state: Socket | undefined, action: ISocketContextAction): ISocketContextState => {
    switch (action.type) {
        case "update_socket":
            return { ...state, socket: action.payload as Socket }
        default:
            return state;
    }
}