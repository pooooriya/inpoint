import classNames from "classnames"
import { Button, DropDown } from "components"
import { AppContext } from "context"
import { useContext } from "react"
import { FiMoreVertical } from "react-icons/fi"
import { Roles, SocketEventEmitter } from "types"
import { EventContextActionType } from "types/context"

type ParticipantCartProps = {
    name: string
    type: string
    id: string
}
export const ParticipantCart = ({ name, type, id }: ParticipantCartProps): JSX.Element => {
    const { auth, socket, event } = useContext(AppContext).state;
    const dispatch = useContext(AppContext).dispatch;
    const handleKickUser = (id: string) => {
        socket?.emit(SocketEventEmitter.KICK_USER, {
            socketId: id,
            room: event.title
        })
        dispatch({
            type: EventContextActionType.USER_REMOVED_FROM_SESSION,
            payload: id
        })
    }
    return (
        <div className={classNames("flex justify-between items-center bg-primary-1000 hover:bg-primary-900 transition-colors duration-300 p-5 rounded-xl", auth.role === Roles.HOST && "bg-primary-700")}>
            <h3 className="text-primary-200 font-bold">{name}<span className="mr-1">{auth.role === Roles.HOST && "(ادمین)"}</span></h3>
            {auth.role === Roles.HOST && type != 'TEACHER' && (
                <DropDown Icon={<FiMoreVertical className="text-primary-200" />} Type="icon">
                    <Button title="اخراج کاربر" variant="primary" className="text-primary-300" onClick={() => handleKickUser(id)} />
                </DropDown>
            )}
        </div>
    )
}
