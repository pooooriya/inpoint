import { TextArea } from "components"
import { RiSendPlaneFill } from 'react-icons/ri'
export const MessageBox = () => {
    return (
        <div className="p-3 bg-primary-800 flex justify-between items-center">
            <TextArea placeholder="کامنت شما ..." rows={1} />
            <div className="mr-2 bg-secondary p-1 rounded-lg flex justify-center items-center hover:bg-opacity-70 cursor-pointer transition-colors">
                <RiSendPlaneFill size={25} className="-rotate-90 text-primary-200" />
            </div>
        </div>
    )
}
