import { ChatReducer } from "./chat/chat.reducer";
import {
  createContext,
  PropsWithChildren,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  AppContextIntialStateType,
  IContextAction,
  Roles,
  SocketContextActionType,
  SocketListenerEvents,
} from "types";
import { SocketReducer } from "./socket/socket.reducer";
import { useSocket } from "hooks/useSocket";
import Config from "inpoint.config";
import { SocketEventEmitter } from "types";
import { JoinRoomEmitter } from "dtos";
import { NotificationReducer } from "./notification/notification.reducer";
import {
  ChatContextActionType,
  EventContextActionType,
  NotificationType,
  VoteContextActionType,
} from "types/context";
import { Button, LoadingButton } from "components/Forms/Button";
import {
  IEventParticipantResponse,
  ISocketChatResponse,
  NotificationTypes,
} from "types/socket";
import { toast } from "react-toastify";
import { AuthReducer } from "./auth/auth.reducer";
import { EventReducer } from "./event/event.reducer";
import { destroyCookie } from "nookies";
import { VoteReducer } from "./vote/vote.reducer";
import { useRouter } from "next/router";

const initialState: AppContextIntialStateType = {
  chats: {
    isActive: true,
    isPrivate: false,
    messages: [],
  },
  vote: {
    answers: [],
    hasNewVote: false,
    questions: [],
    showAnswer: false,
    title: "",
    trueAnswer: 0,
    needResetVote: true,
    userAnswer: 0,
    userIsAnswered: false,
  },
  socket: undefined,
  auth: {
    accessToken: "",
    isAuthenticated: false,
    role: null,
    username: "",
  },
  event: {
    link: "",
    player: "",
    settings: [],
    title: "",
    participants: [],
    description: "",
  },
  notification: {
    isShow: false,
    message: null,
  },
};

const AppContext = createContext<{
  state: AppContextIntialStateType;
  dispatch: React.Dispatch<IContextAction<any, any>>;
}>({
  state: initialState,
  dispatch: () => null,
});

const combineReducer = (
  { chats, socket, notification, auth, event, vote }: AppContextIntialStateType,
  action: any
) => ({
  chats: ChatReducer(chats, action),
  socket: SocketReducer(socket, action),
  notification: NotificationReducer(notification, action),
  auth: AuthReducer(auth, action),
  event: EventReducer(event, action),
  vote: VoteReducer(vote, action),
});

interface AppContextProviderProps extends PropsWithChildren {}
const AppContextProvider: React.FunctionComponent<AppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const router = useRouter();
  const [state, dispatch] = useReducer(combineReducer, initialState);
  console.log(state.auth.accessToken, "***********************************");
  const socket = useSocket(Config.connectionStrings.socketURL, {
    transports: ["websocket"],
    reconnectionAttempts: 5,
    reconnectionDelay: 5000,
    autoConnect: false,
    withCredentials: false,
  });

  const handleSocketConnect = () => {
    //todo: get data from api first and then connect to socket
    socket.connect();
    //2.listen to general events on sockets
    socket.on<SocketListenerEvents>(
      SocketListenerEvents.SOCKET_CONNECTED,
      () => {
        //update context to make socket accessible from everywhere
        dispatch({
          type: SocketContextActionType.SOCKET_CONNECTED,
          payload: socket,
        });
        //raise notification when socket is connected
        toast.success(
          <h5 className="text-md">
            {Config.notifications.user_connect_to_socket}
          </h5>,
          {
            delay: 2000,
            hideProgressBar: true,
            position: "top-center",
            closeButton: false,
            autoClose: 1000,
          }
        );
      }
    );

    //2.1.handle socket dissconnect
    socket.on<SocketListenerEvents>(
      SocketListenerEvents.SOCKET_DISCONNECTED,
      function () {
        dispatch({
          type: NotificationType.NOTIFICATION_RAISED,
          payload: (
            <>
              <span>
                {Config.notifications.user_disconnected_message.message}
              </span>
              <span className="text-sm mb-3 mt-1">
                {Config.notifications.user_disconnected_message.description}
              </span>
              <LoadingButton className="ml-2 w-10 h-10" />
              <span className="text-sm">
                {Config.notifications.user_disconnected_message.buttonText}
              </span>
            </>
          ),
        });
      }
    );
    //2.2.user joined room event emit to socket to keep track user in our system
    socket.emit<SocketEventEmitter>(
      SocketEventEmitter.USER_JOIN_ROOM,
      new JoinRoomEmitter({
        room: router?.query?.slug?.[0],
        token: state?.auth?.accessToken,
      })
    );
  };

  const handleDefaultSocketIoEvents = () => {
    socket.io.on("reconnect", () => {
      dispatch({ type: NotificationType.CLEAR_NOTIFICATION });
    });
    socket.io.on("reconnect_failed", () => {
      dispatch({
        type: NotificationType.NOTIFICATION_RAISED,
        payload: (
          <div className="flex flex-col justify-center text-center">
            <span>
              {
                Config.notifications.user_retry_connection_failed_message
                  .message
              }
            </span>
            <span className="text-sm mb-3 mt-1">
              {
                Config.notifications.user_retry_connection_failed_message
                  .description
              }
            </span>
            <div className="mt-3">
              <Button
                title={
                  Config.notifications.user_retry_connection_failed_message
                    .buttonText
                }
                variant="primary"
              />
            </div>
          </div>
        ),
      });
    });
  };

  const handleChatEvents = () => {
    socket.on<SocketListenerEvents>(
      SocketListenerEvents.NEW_MESSAGE_RECIEVED,
      function (data: ISocketChatResponse) {
        if (data?.type === NotificationTypes.MESSAGE) {
          dispatch({
            type: ChatContextActionType.NEW_MESSAGE_RECEIVED,
            payload: data,
          });
        } else if (
          data?.type === NotificationTypes.NOTIFICATION &&
          data.text === "چت غیر فعال شد"
        ) {
          toast.success(data?.text);
          dispatch({
            type: ChatContextActionType.CHAT_ROOM_GENERALLY_DISABLED,
          });
        } else if (
          data?.type === NotificationTypes.NOTIFICATION &&
          data.text === "چت فعال شد"
        ) {
          toast.success(data?.text);
          dispatch({
            type: ChatContextActionType.CHAT_ROOM_GENERALLY_ACTIVATED,
          });
        } else if (
          data?.type === NotificationTypes.NOTIFICATION &&
          data?.text === "پیام خصوصی فعال شد"
        ) {
          toast.success(data?.text);
          dispatch({
            type: ChatContextActionType.PRIVATE_MODE_CHAT_ACTIVATED,
          });
        } else if (
          data?.type === NotificationTypes.NOTIFICATION &&
          data?.text === "پیام خصوصی غیر فعال شد"
        ) {
          toast.success(data?.text);
          dispatch({
            type: ChatContextActionType.PRIVATE_MODE_CHAT_ACTIVATED,
          });
        }
      }
    );

    socket.on<SocketListenerEvents>(
      SocketListenerEvents.DELETE_MESSAGE_BY_ID,
      function (data: any) {
        dispatch({
          type: ChatContextActionType.MESSAGE_HAS_BEEN_REMOVED,
          payload: data,
        });
      }
    );
    socket.on<SocketListenerEvents>(
      SocketListenerEvents.GET_ALL_MESSAGES,
      function (data: ISocketChatResponse[]) {
        dispatch({
          type: ChatContextActionType.GET_ALL_MESSAGES_CHAT,
          payload: data.sort((a, b) => Date.parse(a.time) - Date.parse(b.time)),
        });
      }
    );
  };

  const handleGetParticipants = () => {
    socket.on<SocketListenerEvents>(
      SocketListenerEvents.GET_ALL_PARTICPANTS_LIST,
      function ({ users }: { users: IEventParticipantResponse[] }) {
        dispatch({
          type: EventContextActionType.PARTICPANT_LIST_RECIEVIED,
          payload: users,
        });
      }
    );

    socket.on<SocketListenerEvents>(
      SocketListenerEvents.USER_HAD_BEEN_KICKED,
      function () {
        console.log("sssssssssssssss");

        // destroyCookie(null, "token");
        // destroyCookie(null, "username");
        // router.push('/404')
        // handleSocketDispose();
      }
    );
  };

  const handleVoteEvent = () => {
    socket.on<SocketListenerEvents>(
      SocketListenerEvents.EVENT_FINISHED,
      function () {
        destroyCookie(null, "token");
        destroyCookie(null, "username");
        handleSocketDispose();
        router.push("/inpoint/finish");
      }
    );

    socket.on<SocketListenerEvents>(
      SocketListenerEvents.NEW_VOTE_CREATED,
      function () {
        dispatch({
          type: VoteContextActionType.USER_RESET_ANSWERS,
        });
      }
    );
    if (state.auth.role === Roles.HOST) {
      socket.on<SocketListenerEvents>(
        SocketListenerEvents.GET_NEW_VOTE_FROM_HOST_SIDE,
        function (data: any) {
          dispatch({
            type: VoteContextActionType.NEW_VOTE_RECIEVED,
            payload: data,
          });
        }
      );
    } else {
      socket.on<SocketListenerEvents>(
        SocketListenerEvents.GET_NEW_VOTE_FROM_CLIENT_SIDE,
        function (data: any) {
          dispatch({
            type: VoteContextActionType.NEW_VOTE_RECIEVED,
            payload: data,
          });
        }
      );
    }
  };

  const handleSocketDispose = () => {
    socket.off();
    socket.disconnect();
  };
  useEffect(() => {
    if (state.auth.isAuthenticated) {
      //1.connect to socket
      handleSocketConnect();
      //2.handle default socket.io-client events
      handleDefaultSocketIoEvents();
      //3.handle chats events
      handleChatEvents();
      //4.handle participants
      handleGetParticipants();
      //5.handle vote event
      handleVoteEvent();
    } else {
      handleSocketDispose();
    }
    return () => handleSocketDispose();
  }, [state.auth.isAuthenticated]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
