import { Button } from "components/Forms/Button"
import { IoMdExit } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineLink } from 'react-icons/ai'
type HeaderProps = {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="bg-primary-900 flex rounded-xl items-center justify-between px-4 py-2 text-primary-300 text-xl">
            <h1 className="font-bold">مروری بر مقدمات برنامه نویسی</h1>
            <div className="flex justify-center items-center">
                {/* <div>
                    <Button type="outline" icon={<AiOutlineLink className="ml-2" />} title="لینک رویداد" />
                </div> */}
                <div className="mx-5">
                    <Button type="primary" icon={<AiOutlinePlus className="ml-2" />} title="ایجاد نظرستجی" />
                </div>
                <div>
                    <Button type="danger" icon={<IoMdExit className="ml-2" />} title="اتمام رویداد" />
                </div>
            </div>
        </div>
    )
}