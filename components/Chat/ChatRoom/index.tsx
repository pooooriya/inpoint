
import Message from '../Message'
import { MessageBox } from '../MessageBox'
type ChatRoomProps = {
    type: "public" | "private"
}
export const ChatRoom = ({ type = 'public' }: ChatRoomProps) => {
    switch (type) {
        case "public":
            return (
                <div className='relative h-[calc(100vh-146px)]'>
                    <ul className="p-3 h-[calc(100%-57px)] overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
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
                    <div className='absolute bottom-0 w-full'>
                        <MessageBox />
                    </div>
                </div>
            )
        case "private":
            return (
                <div className='relative h-[calc(100vh-146px)]'>
                    <ul className="p-3 h-full overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
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
                </div>
            )
    }
}
