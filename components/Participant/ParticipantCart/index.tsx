import { Button, DropDown } from "components"
import { FiMoreVertical } from "react-icons/fi"

type ParticipantCartProps = {
    name: string
}
export const ParticipantCart = ({ name }: ParticipantCartProps): JSX.Element => {
    return (
        <div className="flex justify-between items-center bg-primary-1000 hover:bg-primary-900 transition-colors duration-300 p-5 rounded-xl">
            <h3 className="text-primary-200 font-bold">{name}</h3>
            <DropDown Icon={<FiMoreVertical className="text-primary-200" />} Type="icon">
                <Button title="اخراج کاربر" variant="secondary" />
            </DropDown>
        </div>
    )
}
