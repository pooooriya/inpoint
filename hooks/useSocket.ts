import { useEffect } from 'react';
import { useRef } from 'react';
import io, { ManagerOptions, Socket, SocketOptions } from 'socket.io-client';

export const useSocket = (
    url: string,
    opts?: Partial<ManagerOptions & SocketOptions> | undefined
): Socket => {
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV == "development") {
        if (!url) {
            throw new Error("You Must Pass A Valid Url To Connect Socket Server !")
        }
    }
    const { current: socket } = useRef(io(url, opts));
    useEffect(() => {
        return () => {
            if (socket) socket.close();
        }
    }, [socket])
    return socket;
}

