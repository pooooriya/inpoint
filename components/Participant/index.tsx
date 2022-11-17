import { digitsEnToFa } from "@persian-tools/persian-tools"
import ChatLayout from "components/Chat/ChatLayout"
import { AppContext } from "context"
import { useContext } from "react"
import { ParticipantCart } from "./ParticipantCart"


export const Participant = (): JSX.Element => {
    const { event: { participants } } = useContext(AppContext).state;
    return (
        <>
            {participants.length > 0 && <ul className="p-5 flex-1 h-full scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600 ">
                <h3 className="text-primary-500 font-normal mb-2 text-sm">{digitsEnToFa(participants.length)} شرکت کننده</h3>
                {participants.map(item => (
                    <li className="mb-3">
                        <ParticipantCart name={item.fullName} type={item.type} />
                    </li>
                ))}
            </ul>}
        </>
    )
}

