import { Switch } from "components"
import { AppContext } from "context"
import { useContext } from "react"
import { SocketEventEmitter } from "types"

type SettingProps = {}
export const Setting = ({ }: SettingProps) => {
    const { socket } = useContext(AppContext).state
    const handleActiveChat = () => {
        socket?.emit(SocketEventEmitter.TOGGLE_DISABLE_CHAT);
    }
    return (
        <div className="p-5 flex-1 relative overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
            <h3 className="text-primary-500 text-lg font-normal mb-2">تنظیمات</h3>
            <div className="divide-y divide-gray-600">
                <div className="flex flex-col py-2">
                    <div className="flex align-middle items-center">
                        <Switch className="mb-1" activeMessage="گفتگو عمومی باز شد" deactiveMessage="گفتگو عمومی بسته شد" onClick={handleActiveChat} />
                        <h2 className="m-0 text-primary-300 mr-3">فعال کردن گفتگو های عمومی</h2>
                    </div>
                    <h4 className="text-primary-600 text-sm mt-1">گفتگو های عمومی افراد را غیرفعال کنید</h4>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex align-middle items-center">
                        <Switch className="mb-1" />
                        <h2 className="m-0 text-primary-300 mr-3 ">خصوصی کردن گفتگو ها</h2>
                    </div>
                    <h4 className="text-primary-600 text-sm mt-1">خصوصی کردن پیام بین شرکت کننده رویداد و ادمین</h4>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex align-middle items-center">
                        <Switch className="mb-1" />
                        <h2 className="m-0 text-primary-300 mr-3 ">فعال سازی دارک مود</h2>
                    </div>
                    <h4 className="text-primary-600 text-sm mt-1">تغییر تم سایت به دارک مود</h4>
                </div>
            </div>

        </div>
    )
}

