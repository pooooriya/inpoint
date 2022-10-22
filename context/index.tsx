import { ChatReducer } from './chat/chat.reducer';
import { createContext, PropsWithChildren, useEffect, useReducer } from "react";
import { AppContextIntialStateType, ChatContextActionType, IContextAction, SocketContextActionType } from 'types';
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
    useEffect(() => {
        dispatch({
            type: SocketContextActionType.SOCKET_UPDATED,
            payload: "injaaaaaaaaaaaaaaaaaaa"
        });
        dispatch({
            type: ChatContextActionType.PRIVATE_MODE_CHAT_ACTIVATED,
        });
        dispatch({
            type: ChatContextActionType.NEW_MESSAGES_ADDED_TO_PRIVATE_CHAT,
            payload: {
                id: 1, text: "injaaaaaaaa"
            }
        });
        return () => {
            console.log("CleanUp")
        };

    }, [])
    const socket = useSocket(Config.connectionStrings.socketURL, {
        transports: ["websocket"]
    });

    useEffect(() => {

    }, [])

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };
