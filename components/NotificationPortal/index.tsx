import ReactDOM from "react-dom"
import { ToastContainer } from "react-toastify"
export const NotificationPortal = () => {
    return ReactDOM.createPortal(
        <ToastContainer />,
        document?.getElementById("inpoint_notification") as HTMLElement
    )
}
