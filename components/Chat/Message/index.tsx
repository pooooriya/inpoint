import { FiMoreVertical } from 'react-icons/fi'
type MessageProps = {

}

const Message = ({ }: MessageProps) => {
    return (
        <div className="p-3 bg-primary-1000 flex flex-col rounded-lg">
            <div className='flex justify-between items-center text-xs font-normal text-primary-500'>
                <h6>پوریا باباعلی</h6>
                <div className='flex items-center justify-center'>
                    <h6 className='mt-[2px] ml-2'>4 دقیقه قبل</h6>
                    <FiMoreVertical size={18} className="cursor-pointer" />
                </div>
            </div>
            <p dir='auto' className='text-primary-400 mt-2'>بنظرتون من برنامه نویس خوبیم یا نه ؟</p>
        </div>
    )
}

export default Message