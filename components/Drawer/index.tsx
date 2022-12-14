import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';
import React from 'react';
import classNames from 'classnames';

type DrawerProps = {
    type: "left" | "right" | "top" | "bottom"
    title?: string,
    description?: string,
    children: React.ReactNode,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type DirecationType = {
    [x in Pick<DrawerProps, "type">[keyof Pick<DrawerProps, "type">]]?: {
        dialog: string;
        enterFrom: string;
        enterTo: string;
        leave: string;
        leaveFrom: string;
        leaveTo: string;
    }
}

const direction: DirecationType = {
    left: {
        dialog: "fixed z-30 left-0 top-0 bottom-0",
        enterFrom: "-translate-x-full",
        enterTo: "translate-x-0",
        leave: "transition ease-in-out duration-300 transform",
        leaveFrom: "translate-x-0",
        leaveTo: "-translate-x-full"
    },
    bottom: {
        dialog: "fixed z-30 left-0 bottom-0 right-0",
        enterFrom: "translate-y-full",
        enterTo: "translate-y-0",
        leave: "transition ease-in-out duration-300 transform",
        leaveFrom: "translate-y-0",
        leaveTo: "translate-y-full"
    }
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(({
    title,
    description,
    children,
    isOpen,
    type = "left",
    setIsOpen
}, ref) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment} >
                <Dialog
                    as="div"
                    onClose={() => setIsOpen(false)}
                    className={direction[type]?.dialog}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" onClick={() => setIsOpen(false)} />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom={direction[type]?.enterFrom}
                        enterTo={direction[type]?.enterTo}
                        leave={direction[type]?.leave}
                        leaveFrom={direction[type]?.leaveFrom}
                        leaveTo={direction[type]?.leaveTo}
                    >
                        <div ref={ref} className={classNames("fixed !w-full lg:relative lg:top-0 transition-all duration-200 h-auto max-h-full flex-[1_0_auto] lg:w-[350px] rounded-tr-xl rounded-tl-xl lg:rounded-tl-none lg:rounded-br-xl  bg-primary-1100 z-50 flex flex-col inset-0 !top-auto", type == "left" || type == "right" ? "!h-full !w-[400px]" : "")}>
                            <div className="py-8 flex-1 overflow-auto">
                                <div className='absolute left-5 top-8 text-primary-200 cursor-pointer font-normal'>
                                    <AiOutlineClose size={18} onClick={() => setIsOpen(false)} />
                                </div>
                                <div className='flex flex-col p-5'>
                                    {title && (<h2 className="text-primary-200 font-normal">{title}</h2>)}
                                    {description && (<h4 className="text-primary-800 text-sm w-[80%]">{description}</h4>)}
                                </div>
                                <div className='flex flex-col flex-auto p-5'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition>

        </>

    );
})