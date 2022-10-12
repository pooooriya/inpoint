
import ChatLayout from '../ChatLayout'
import Message from '../Message'
import { MessageBox } from '../MessageBox'
type ChatRoomProps = {
    type?: "public" | "private"
    videoSize: number
}
export const ChatRoom = ({ videoSize }: ChatRoomProps) => {
    return (
        <>
            <ul className="flex-1 p-3 overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>  <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
                <li className='px-5 py-2'>
                    <Message />
                </li>
            </ul>
            <div className='flex w-full'>
                <MessageBox />
            </div>
        </>
    )
}
