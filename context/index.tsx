import { ChatReducer } from './chat/chat.reducer';
import { createContext, PropsWithChildren, useReducer } from "react";
import { AppContextIntialStateType, IContextAction } from 'types/context/context';
import { SocketReducer } from './socket/socket.reducer';

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

const mainReducer = ({ chats, socket }: AppContextIntialStateType, action: any) => ({
    chats: ChatReducer(chats, action),
    socket: SocketReducer(socket, action)
});

interface AppContextProviderProps extends PropsWithChildren { }
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({ children }): JSX.Element => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider };
