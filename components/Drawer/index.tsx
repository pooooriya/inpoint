import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AiOutlineClose } from 'react-icons/ai';

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
    }
}

export function Drawer({
    title,
    description,
    children,
    isOpen,
    type = "left",
    setIsOpen
}: DrawerProps) {
    return (
        <Transition appear show={isOpen} as={Fragment} >
            <Dialog
                as="div"
                onClose={() => setIsOpen(false)}
                className={direction[type]?.dialog}
                onBlur={() => setIsOpen(false)}
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
                    <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                    <div className='w-[350px] h-screen bg-primary-1100 z-50 flex flex-col'>
                        <div className="py-8 px-5 h-full">
                            <div className='absolute left-5 top-8 text-primary-200 cursor-pointer  font-normal'>
                                <AiOutlineClose size={18} onClick={() => setIsOpen(false)} />
                            </div>
                            <div className='h-full'>
                                <div className='flex flex-col'>
                                    {title && (<h2 className="text-primary-200 font-normal">{title}</h2>)}
                                    {description && (<h4 className="text-primary-800 text-sm w-[80%]">{description}</h4>)}
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </Transition.Child>
                {/* <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div
                            className={`flex flex-col justify-between bg-gray-500 z-50
                          w-full max-w-sm p-6 overflow-hidden text-left
                          align-middle shadow-xl rounded-r-2xl`}>
                            <div>
                                <Dialog.Title
                                    className="font-bold text-2xl md:text-4xl text-blue-500"
                                >
                                    {title}
                                </Dialog.Title>
                                <Dialog.Description>{description}</Dialog.Description>
                                {children}
                            </div>
                            <div className="self-center mt-10">
                                <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
                            </div>
                        </div>
                    </Transition.Child> */}
            </Dialog>
        </Transition>
    );
}