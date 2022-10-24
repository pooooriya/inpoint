import { ChatReducer } from './chat/chat.reducer';
import { createContext, PropsWithChildren, useEffect, useReducer, useState } from "react";
import { AppContextIntialStateType, ChatContextActionType, IContextAction, SocketContextActionType, SocketListenerEvents } from 'types';
import { SocketReducer } from './socket/socket.reducer';
import { useSocket } from 'hooks/useSocket';
import Config from 'inpoint.config';

const initialState: AppContextIntialStateType = {
    chats: {
        isActive: false,
        isPrivate: false,
        privateMessages: [],
        publicMessages: []
    },
    socket: undefined
}

const AppContext = createContext<{
    state: AppContextIntialStateType;
    dispatch: React.Dispatch<IContextAction<any, any>>;
}>({
    state: initialState,
    dispatch: () => null
});

const combineReducer = ({ chats, socket }: AppContextIntialStateType, action: any) => ({
    chats: ChatReducer(chats, action),
    socket: SocketReducer(socket, action)
});

interface AppContextProviderProps extends PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(combineReducer, initialState);
    const [isLoading, setIsLoading] = useState(true);
    const socket = useSocket(Config.connectionStrings.socketURL, {
        transports: ["websocket"],
        reconnectionAttempts: 10,
        reconnectionDelay: 5000,
        autoConnect: false
    });

    const handleSocketConnect = () => {
        //1.connect socket 
        socket.connect();

        //2.listen to general events on sockets built on top of socket-io-client
        socket.on(SocketListenerEvents.SOCKET_CONNECTED, () => {
            //set false to loading
            setIsLoading(false);
            //update context to make socket accessible from everywhere
            dispatch({ type: SocketContextActionType.SOCKET_CONNECTED, payload: socket })
            console.log("user connected successfuly !!!!!!!!!!!!");
        })

        //3.handle socket dissconnect
        socket.on(SocketListenerEvents.SOCKET_DISCONNECTED, function () {
            console.log('user disconnected');
        });

    }

    const handleDefaultSocketIoEvents = () => {
        // socket.io.on("error", (err: Error) => {
        //     console.log("socket has error");
        // })
        socket.io.on("reconnect", (attemp) => {
            console.log("reconnect_successfully");
        })
        socket.io.on("reconnect_attempt", (attemp) => {
            console.log(attemp, "*********************");
        })
        socket.io.on("reconnect_failed", () => {
            console.log("reconnect_failed !!!");
        })
    }

    const handleSocketDispose = () => {
        socket.off();
        socket.disconnect();
    }
    useEffect(() => {
        //1.connect to socket 
        handleSocketConnect();
        //2.handle default socket.io-client events
        handleDefaultSocketIoEvents();
        return () => handleSocketDispose();
    }, [])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };
