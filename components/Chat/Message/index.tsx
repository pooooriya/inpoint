import { DropDown } from 'components'
import { Button } from 'components'
import { timeAgo } from "@persian-tools/persian-tools";
import { FiMoreVertical } from 'react-icons/fi'
import moment from 'jalali-moment';
import { memo } from 'react';

type MessageProps = {
    text: string
    time: string
    fullname: string
}

const Message = memo(({ text, time, fullname }: MessageProps) => {
    return (
        <div className="p-3 bg-primary-1000 flex flex-col rounded-lg hover:bg-primary-900 transition-colors duration-200">
            <div className='flex justify-between items-center  font-normal text-primary-500'>
                <h6 className='text-xs'>{fullname}</h6>
                <div className='flex items-center justify-center'>
                    <h6 className=' ml-1 text-xs'>{timeAgo(moment(time).locale('fa').format('YYYY/M/D HH:mm:ss'))}</h6>
                    <DropDown Icon={<FiMoreVertical />} Type="icon" >
                        <Button title="حذف پیام" variant="primary" />
                    </DropDown>
                </div>
            </div>
            <p dir='auto' className='text-primary-400 mt-2 text-sm break-all'>{text}</p>
        </div>
    )
})

export default Message