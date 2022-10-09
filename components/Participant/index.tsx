import ChatLayout from "components/Chat/ChatLayout"
import { ParticipantCart } from "./ParticipantCart"

type ParticipantProps = {
    videoSize: number
}
export const Participant = ({ videoSize }: ParticipantProps): JSX.Element => {
    return (
        <ChatLayout videoSize={videoSize}>
            <ul className="p-5 h-full overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600 ">
                <h3 className="text-primary-500 text-lg font-normal mb-2">4 شرکت کننده</h3>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
                <li className="mb-3">
                    <ParticipantCart name="پوریا باباعلی" />
                </li>
            </ul>
        </ChatLayout>
    )
}

