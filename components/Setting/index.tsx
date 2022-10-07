import { Switch } from "components"

type SettingProps = {}
export const Setting = ({ }: SettingProps) => {
    return (
        <div className="p-5">
            <h3 className="text-primary-500 text-lg font-normal mb-2">تنظیمات</h3>
            <div className="divide-y divide-gray-600">
                <div className="flex flex-col py-2">
                    <div className="flex align-middle items-center">
                        <Switch className="mb-1" />
                        <h2 className="m-0 text-primary-300 mr-3 ">فعال کردن گفتگو های عمومی</h2>
                    </div>
                    <h4 className="text-primary-600 text-sm mt-1">گفتگو های عمومی افراد را غیرفعال کنید</h4>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex align-middle items-center">
                        <Switch className="mb-1" />
                        <h2 className="m-0 text-primary-300 mr-3 ">فعال کردن گفتگو های عمومی</h2>
                    </div>
                    <h4 className="text-primary-600 text-sm mt-1">گفتگو های عمومی افراد را غیرفعال کنید</h4>
                </div>
                <div className="flex flex-col py-2">
                    <div className="flex align-middle items-center">
                        <Switch className="mb-1" />
                        <h2 className="m-0 text-primary-300 mr-3 ">فعال کردن گفتگو های عمومی</h2>
                    </div>
                    <h4 className="text-primary-600 text-sm mt-1">گفتگو های عمومی افراد را غیرفعال کنید</h4>
                </div>
            </div>

        </div>
    )
}

