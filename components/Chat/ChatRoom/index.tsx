
import { AppContext } from 'context'
import { useContext } from 'react'
import Message from '../Message'
import { MessageBox } from '../MessageBox'
type ChatRoomProps = {

}
export const ChatRoom = ({ }: ChatRoomProps) => {
    const { socket, chats } = useContext(AppContext).state;
    return (
        <>
            <ul className="flex-1 p-3 overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                {chats?.messages?.map((message, index) =>
                (
                    <li className='px-5 py-2' key={'message' + index}>
                        <Message fullname={message.fullName} text={message.text} time={message.time} />
                    </li>
                )
                )}
            </ul>
            <div className='flex w-full'>
                <MessageBox />
            </div>
        </>
    )
}
