import { Button, Drawer, Switch, TextArea } from "components"
import { IoMdExit } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineLink, AiOutlineWarning } from 'react-icons/ai'
import { MdContentCopy } from 'react-icons/md'
import { DropDown } from "components"
import { useState } from "react"
import { Modal } from "components/Modal"

type HeaderProps = {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    const [isOpen, setisOpen] = useState(false)
    const [isOpenEndShow, setIsOpenEndShow] = useState(false)
    return (
        <>
            <div className="bg-primary-900 flex rounded-xl flex-wrap sm:justify-center items-center xl:justify-between text-center px-4 py-2 text-primary-300 text-xl w-full">
                <div className="flex w-[500px] m-2">
                    <h1 className="font-bold justify-start text-right leading-none overflow-hidden whitespace-nowrap text-ellipsis w-[99%]">مروری بری بری بری بری بری بری بری بری بی بری بری بری بری بری بی بری بری بری بری بری بی بری بری بری بری بری بی بری بری بری بری بری بری بری بری بری بری بری</h1>
                </div>
                <div className="flex flex-auto m-2 sm:justify-center xl:justify-end">
                    <DropDown Title="لینک رویداد" Icon={<AiOutlineLink className="ml-1" />} Type="primary">
                        <div className='cursor-pointer p-2 border mt-2 border-primary-800  bg-primary-1000 rounded-lg flex items-center'>
                            <div className='p-3 rounded-xl  bg-primary-800'>
                                <MdContentCopy className='text-primary-300' />
                            </div>
                            <div className='mr-2 break-all '>
                                <h5 className='text-sm'>لینک دعوت</h5>
                                <h6 className='text-xs'>https://google.com/dsaiajsfipgaigjs/gadgdadgagda/gadgdaagdgda//ggaddgagda/gadadgadggda</h6>
                            </div>
                        </div>
                    </DropDown>
                    <div className="mx-3 flex justify-center items-center">
                        <Button variant="primary" icon={<AiOutlinePlus className="ml-2" />} title="ایجاد نظرستجی" onClick={() => setisOpen(true)} />
                    </div>
                    <Button variant="danger" icon={<IoMdExit className="ml-2" />} title="اتمام رویداد" onClick={() => setIsOpenEndShow(true)} />
                </div>
            </div>
            <Modal title="اتمام رویداد" setIsOpen={setIsOpenEndShow} isOpen={isOpenEndShow} >
                <div className="flex flex-col items-center text-primary-400">
                    <div className="bg-primary-900 w-[80px] h-[80px] flex justify-center items-center rounded-full">
                        <AiOutlineWarning className="text-danger" size={50} />
                    </div>
                    <h2 className="mt-5">آیا رویداد 1 تمام شود؟</h2>
                    <h3 className="text-sm mt-2">رویداد برای همه شرکت کنندگان قطع می شود.</h3>
                    <div className="flex [&_button]:mt-4 [&_button]:mx-3">
                        <Button variant="primary" title="انصراف" outlined />
                        <Button variant="danger" title="اتمام رویداد" />
                    </div>
                </div>
            </Modal>
            <Drawer isOpen={isOpen} setIsOpen={setisOpen} type="left" description="نظرسنجی خود را ایجاد کنید تا کاربران بتوانند در نظر سنجی پخش زنده شرکت کنند" title="تعریف نظرسنجی">
                <div className="flex flex-col justify-between h-[calc(100%-50px)]">
                    <div>
                        <div className="flex justify-between items-center mt-5 text-primary-300">
                            <h4>
                                سوال
                            </h4>
                            <span className="text-xs">100</span>
                        </div>
                        <TextArea type="primary" placeholder="سوال خود را وارد کنید ..." />
                        <div className="flex items-center mt-5">
                            <Switch className="mb-1" />
                            <h4 className="mr-2 text-primary-400 font-bold">نمایش پاسخ ها</h4>
                        </div>
                    </div>
                    <Button variant="secondary" title="تایید و ساخت نظرسنجی" className="text-xl flex justify-center" />
                </div>
            </Drawer>
        </>
    )
}