
import Message from '../Message'
import { MessageBox } from '../MessageBox'
type ChatRoomProps = {

}
export const ChatRoom = ({ }: ChatRoomProps) => {
    return (
        <div className='relative h-[calc(100vh-138px)]'>
            <ul className="p-3 h-[calc(100%-57px)] overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
                <li className='p-5'>
                    <Message />
                </li>
            </ul>
            <div className='absolute bottom-0 w-full'>
                <MessageBox />
            </div>
        </div>
    )
}
