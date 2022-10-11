
import ChatLayout from '../ChatLayout'
import Message from '../Message'
import { MessageBox } from '../MessageBox'
type ChatRoomProps = {
    type?: "public" | "private"
    videoSize: number
}
export const ChatRoom = ({ type = 'public', videoSize }: ChatRoomProps) => {
    return (
        <ChatLayout videoSize={videoSize}>
            <ul className="p-3 overflow-auto h-[calc(100%-50px)] scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>  <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
                <li className='px-5 py-2'>
                    <Message type={type} />
                </li>
            </ul>
            <div className='fixed lg:absolute bottom-0 right-0 left-0 w-full'>
                <MessageBox />
            </div>
        </ChatLayout>
    )
}
