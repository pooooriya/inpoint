import ChatLayout from "components/Chat/ChatLayout"
import { ParticipantCart } from "./ParticipantCart"

export const Participant = (): JSX.Element => {
    return (
        <ChatLayout>
            <ul className="p-5 h-full overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600 ">
                <li className="mb-3">
                    <h3 className="text-primary-500 text-lg font-normal mb-2">4 شرکت کننده</h3>
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
            </ul>
        </ChatLayout>
    )
}

