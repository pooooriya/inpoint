import classNames from "classnames"
import { Button, DropDown } from "components"
import { FiMoreVertical } from "react-icons/fi"
import { Roles } from "types"

type ParticipantCartProps = {
    name: string
    type: Roles
}
export const ParticipantCart = ({ name, type }: ParticipantCartProps): JSX.Element => {
    return (
        <div className={classNames("flex justify-between items-center bg-primary-1000 hover:bg-primary-900 transition-colors duration-300 p-5 rounded-xl", type === Roles.TEACHER && "bg-primary-700")}>
            <h3 className="text-primary-200 font-bold">{name}<span className="mr-1">{type === Roles.TEACHER && "(ادمین)"}</span></h3>
            {type === Roles.STUDENT && (
                <DropDown Icon={<FiMoreVertical className="text-primary-200" />} Type="icon">
                    <Button title="اخراج کاربر" variant="primary" className="text-primary-300" />
                </DropDown>
            )}
        </div>
    )
}
