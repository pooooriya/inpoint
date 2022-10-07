import { DropDown } from 'components'
import { Button } from 'components'
import { FiMoreVertical } from 'react-icons/fi'
type MessageProps = {
    type: "public" | "private"
}

const Message = ({ type }: MessageProps) => {
    return (
        <div className="p-3 bg-primary-1000 flex flex-col rounded-lg hover:bg-primary-900 transition-colors duration-200">
            <div className='flex justify-between items-center  font-normal text-primary-500'>
                <h6 className='text-xs'>پوریا باباعلی</h6>

                <div className='flex items-center justify-center'>
                    <h6 className=' ml-1 text-xs'>4 دقیقه قبل</h6>
                    {type === "public" && (
                        <DropDown Icon={<FiMoreVertical />} Type="icon" >
                            <Button title="اخراج کاربر" variant="secondary" />
                        </DropDown>
                    )}
                </div>
            </div>
            <p dir='auto' className='text-primary-400 mt-2'>بنظرتون من برنامه نویس خوبیم یا نه ؟</p>
        </div>
    )
}

export default Message