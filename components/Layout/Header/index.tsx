import { Button } from "components/Forms/Button"
import { IoMdExit } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineLink } from 'react-icons/ai'
import { DropDown } from "components/Forms/Dropdown"
type HeaderProps = {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="bg-primary-900 flex rounded-xl items-center justify-between px-4 py-2 text-primary-300 text-xl">
            <div className="h-full">
                <h1 className="font-bold leading-none">مروری بر مقدمات برنامه نویسی</h1>
            </div>
            <div className="flex justify-center items-center">
                <DropDown Title="لینک رویداد" Icon={<AiOutlineLink className="ml-1" />} />
                <div className="mx-3 flex justify-center items-center">
                    <Button type="primary" icon={<AiOutlinePlus className="ml-2" />} title="ایجاد نظرستجی" />
                </div>
                <Button type="danger" icon={<IoMdExit className="ml-2" />} title="اتمام رویداد" />
            </div>
        </div>
    )
}