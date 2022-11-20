import { Button, Drawer, Switch, TextArea } from "components"
import { IoMdExit } from 'react-icons/io'
import { AiOutlinePlus, AiOutlineLink, AiOutlineWarning } from 'react-icons/ai'
import { MdContentCopy } from 'react-icons/md'
import { DropDown } from "components"
import { useContext, useEffect, useState } from "react"
import { Modal } from "components/Modal"
import { AppContext } from "context"
import { toast } from "react-toastify"
import { Poll } from "components/Poll"
import { Roles, SocketEventEmitter } from "types"
import { VoteContextActionType } from "types/context"

type HeaderProps = {
    children?: React.ReactNode
}

export const Header = (props: HeaderProps) => {
    const { vote, auth, event, socket } = useContext(AppContext).state;
    console.log(!vote.title);

    const [isOpen, setisOpen] = useState(false)
    const [isOpenEndShow, setIsOpenEndShow] = useState(false)
    const dispatch = useContext(AppContext).dispatch;
    const handleCopyToClipBoard = (textState: string) => {
        navigator.clipboard.writeText(textState)
        toast.success("لینک کپی شد !", {
            delay: 500,
            hideProgressBar: true,
            position: "top-right",
            closeButton: false,
            autoClose: 1000
        })
    }

    useEffect(() => {
        if (isOpen) {
            dispatch({
                type: VoteContextActionType.VOTE_CHECKED
            })
        }
    }, [isOpen])

    return (
        <>
            <div className="bg-primary-900 flex rounded-xl flex-wrap sm:justify-center items-center xl:justify-between text-center px-4 py-2 text-primary-300 text-xl w-full">
                <div className="flex w-[500px] m-2">
                    <h1 className="font-bold justify-start text-center lg:text-right leading-none overflow-hidden whitespace-nowrap text-ellipsis w-[99%]">{event?.description}</h1>
                </div>
                <div className="flex flex-auto m-2 sm:justify-center xl:justify-end">
                    <DropDown Title="لینک رویداد" Icon={<AiOutlineLink className="ml-1" />} Type="primary">
                        {event?.link && (
                            <div className='cursor-pointer p-2 border mt-2 border-primary-800  bg-primary-1000 rounded-lg flex items-center' onClick={() => handleCopyToClipBoard(event?.link)}>
                                <div className='p-3 rounded-xl  bg-primary-800'>
                                    <MdContentCopy className='text-primary-300' />
                                </div>
                                <div className='mr-2 break-all'>
                                    <h5 className='text-sm'>لینک رویداد</h5>
                                    <h6 className='text-xs'>{event?.link}</h6>
                                </div>
                            </div>
                        )}
                    </DropDown>
                    {
                        auth.role === Roles.HOST && vote.needResetVote ? (
                            <div className="mx-3 flex justify-center items-center">
                                <Button variant="primary" icon={<AiOutlinePlus className="ml-2" />} title="ایجاد نظرسنجی" onClick={() => setisOpen(true)} />
                            </div>
                        ) : (
                            <div className="mx-3 flex justify-center items-center relative">
                                <Button variant="primary" title="مشاهده نظرسنجی" disabled={!vote.title} onClick={() => vote.title && setisOpen(true)} />
                                {vote?.hasNewVote && vote.title && (
                                    <div className="w-3 h-3 bg-secondary animate-pulse absolute rounded-full right-0 top-0" />
                                )}
                            </div>
                        )
                    }
                    {auth.role == Roles.HOST && (
                        <Button variant="danger" icon={<IoMdExit className="ml-2" />} title="اتمام رویداد" onClick={() => setIsOpenEndShow(true)} />)}
                </div>
            </div>
            {auth.role == Roles.HOST && (
                <Modal title="اتمام رویداد" setIsOpen={setIsOpenEndShow} isOpen={isOpenEndShow} >
                    <div className="flex flex-col items-center text-primary-400">
                        <div className="bg-primary-900 w-[80px] h-[80px] flex justify-center items-center rounded-full">
                            <AiOutlineWarning className="text-danger" size={50} />
                        </div>
                        <h2 className="mt-5">آیا رویداد تمام شود؟</h2>
                        <h3 className="text-sm mt-2">رویداد برای همه شرکت کنندگان قطع می شود.</h3>
                        <div className="flex [&_button]:mt-4 [&_button]:mx-3">
                            <Button variant="primary" title="انصراف" outlined onClick={() => setIsOpenEndShow(false)} />
                            <Button variant="danger" title="اتمام رویداد" onClick={() => {
                                setIsOpenEndShow(false)
                                socket?.emit(SocketEventEmitter.EVENT_FINISHED, {
                                    room: event.title,
                                    status: true
                                })
                            }} />
                        </div>
                    </div>
                </Modal>
            )}
            <Drawer isOpen={isOpen} setIsOpen={setisOpen} type="left" description={vote.needResetVote ? "نظرسنجی خود را ایجاد کنید تا کاربران بتوانند در نظر سنجی پخش زنده شرکت کنند" : ""} title={vote.needResetVote ? "تعریف نظرسنجی" : "سوال نظرسنجی"}>
                <Poll />
            </Drawer>
        </>
    )
}