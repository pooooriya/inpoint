import { ChatReducer } from './chat/chat.reducer';
import { createContext, PropsWithChildren, useEffect, useReducer } from "react";
import { AppContextIntialStateType, IContextAction } from 'types/context';
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

const combineReducer = (state: AppContextIntialStateType, action: any) => ({
    chats: ChatReducer(state, action),
    socket: SocketReducer(state, action)
});

interface AppContextProviderProps extends PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    // const [state, dispatch] = useReducer(combineReducer, initialState);
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
