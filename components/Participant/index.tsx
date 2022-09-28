import { ParticipantCart } from "./ParticipantCart"

export const Participant = (): JSX.Element => {
    return (
        <ul className="px-5 py-2">
            <h2 className="font-bold text-primary-600 my-3">4 شرکت کننده</h2>
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
    )
}

