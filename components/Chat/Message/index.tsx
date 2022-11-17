import { DropDown } from 'components'
import { Button } from 'components'
import { digitsEnToFa, digitsFaToEn, timeAgo } from "@persian-tools/persian-tools";
import { FiMoreVertical } from 'react-icons/fi'
import { memo, useContext } from 'react';
import { AppContext } from 'context';
import { ChatContextActionType, SocketEventEmitter } from 'types';
import { DeleteMessageEmitter } from 'dtos/socket/emitters/deletemessage.emitter.dto';
import { toast } from 'react-toastify';
import Config from 'inpoint.config';

type MessageProps = {
    text: string
    time: string
    fullname: string
    id: number
}

const Message = memo(({ text, time, fullname, id }: MessageProps) => {
    const { socket } = useContext(AppContext).state;
    const dispatch = useContext(AppContext).dispatch;


    const handleRemoveMessage = (id: number) => {
        socket?.emit<SocketEventEmitter>(SocketEventEmitter.DELETE_MESSAGE_BY_HOST, new DeleteMessageEmitter({
            messageId: id,
            room: "inpointConnect"
        }))
        toast.success(Config.components.chat.remove_message_text, {
            delay: 1000,
            hideProgressBar: true,
            position: "top-center",
            closeButton: false,
        })
        dispatch({
            payload: id,
            type: ChatContextActionType.MESSAGE_HAS_BEEN_REMOVED
        })
    }
    const getTimeNow = (date: string): string => {
        const currentDateTime: string = new Date(date)
            .toLocaleString("fa-IR", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            })
            .replace(/‏|،/g, "");
        return digitsFaToEn(currentDateTime);
    }


    return (
        <div className="p-3 bg-primary-1000 flex flex-col rounded-lg hover:bg-primary-900 transition-colors duration-200">
            <div className='flex justify-between items-center  font-normal text-primary-500'>
                <h6 className='text-xs'>{fullname}</h6>
                <div className='flex items-center justify-center'>
                    <h6 className=' ml-1 text-xs'>{digitsEnToFa(timeAgo(getTimeNow(time)))}</h6>
                    <DropDown Icon={<FiMoreVertical />} Type="icon" >
                        <Button title="حذف پیام" variant="primary" onClick={() => handleRemoveMessage(id)} />
                    </DropDown>
                </div>
            </div>
            <p dir='auto' className='text-primary-400 mt-2 text-sm break-all'>{text}</p>
        </div>
    )
})

export default Message