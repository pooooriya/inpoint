import { Popover } from "components"
import { FiMoreVertical } from "react-icons/fi"

type ParticipantCartProps = {
    name: string
}
export const ParticipantCart = ({ name }: ParticipantCartProps): JSX.Element => {
    return (
        <div className="flex justify-between items-center bg-primary-1000 p-5 rounded-xl">
            <h3 className="text-primary-200 font-bold">{name}</h3>
            <Popover Icon={<FiMoreVertical size={18} className="font-bold text-primary-600" />}>
                <ul className='px-6 py-1 bg-primary-700 cursor-pointer hover:bg-primary-800 font-bold text-black' >
                    <li>
                        حذف کاربر
                    </li>
                </ul>
            </Popover>
        </div>
    )
}
