import { FiMoreVertical } from 'react-icons/fi'
import { Popover } from 'components'
type MessageProps = {
    type: "public" | "private"
}

const Message = ({ type }: MessageProps) => {
    return (
        <div className="p-3 bg-primary-1000 flex flex-col rounded-lg">
            <div className='flex justify-between items-center text-xs font-normal text-primary-500'>
                <h6>پوریا باباعلی</h6>

                <div className='flex items-center justify-center'>
                    <h6 className=' ml-1'>4 دقیقه قبل</h6>
                    {type === "public" && (
                        <Popover Icon={<FiMoreVertical size={18} className="font-bold text-primary-600" />}>
                            <ul className='px-6 py-1 bg-primary-700 cursor-pointer hover:bg-primary-800 font-bold text-black' >
                                <li>
                                    حذف پیام
                                </li>
                            </ul>
                        </Popover>
                    )}
                </div>
            </div>
            <p dir='auto' className='text-primary-400 mt-2'>بنظرتون من برنامه نویس خوبیم یا نه ؟</p>
        </div>
    )
}

export default Message