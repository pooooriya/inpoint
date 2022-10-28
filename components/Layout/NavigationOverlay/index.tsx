import { Transition } from "@headlessui/react"
import { Dispatch, Fragment, SetStateAction } from "react"
import { AiOutlineClose } from "react-icons/ai"

type NavigationOverlayProps = {
    children: React.ReactNode
    isOpen?: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    title?: string
}
export const NavigationOverlay = ({ children, title, isOpen = false, setIsOpen = () => { } }: NavigationOverlayProps) => {
    return (
        <Transition appear show={isOpen} as={Fragment} >
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300 "
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200 "
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute inset-0 z-10 bg-primary-1100 h-inherit flex flex-col ">
                    {title && (<div className="flex p-5 z-10 border-b border-primary-800 bg-primary-1000 justify-between items-center">

                        <h2 className="text-primary-300 text-sm lg:text-xl text-ellipsis overflow-hidden whitespace-nowrap">{title}</h2>

                        <AiOutlineClose size={25} className="cursor-pointer text-primary-400" onClick={() => setIsOpen(false)} />
                    </div>)}
                    {children}
                </div>
            </Transition.Child>
        </Transition>
    )
}

