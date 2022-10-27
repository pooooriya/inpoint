
import { AppContext } from 'context'
import Config from 'inpoint.config'
import { useContext, useEffect, useRef } from 'react'
import Message from '../Message'
import { MessageBox } from '../MessageBox'
import { useForm } from "react-hook-form";

type ChatRoomProps = {

}
export const ChatRoom = ({ }: ChatRoomProps) => {

    const { chats } = useContext(AppContext).state;
    const scrollElement = useRef<HTMLDivElement>(null);
    useEffect(() => {
        scrollElement?.current?.scrollIntoView();
    }, [chats.messages.length])

    return (
        <>
            <ul className="flex-1 p-3 relative overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                {chats?.messages?.sort((a, b) => Date.parse(a.time) - Date.parse(b.time)).map((message, index) =>
                (
                    <li className='px-5 py-2' key={'message' + index}>
                        <Message fullname={message.fullName} text={message.text} time={message.time} />
                    </li>
                )
                )}
                <div ref={scrollElement} />
            </ul>
            {chats.isActive ? (
                <div className='flex w-full'>
                    <MessageBox />
                </div>
            ) : (
                <div className='flex w-full p-5 text-white text-center justify-center items-center bg-primary-900'>
                    <h2>{Config.components.chat.chat_disable_text}</h2>
                </div>
            )}
        </>
    )
}
