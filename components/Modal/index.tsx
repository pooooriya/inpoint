import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type ModalProps = {
    children: React.ReactNode
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
    title: string
}
export function Modal({ children, isOpen, setIsOpen, title }: ModalProps): JSX.Element {

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-primary-1000 p-6 align-middle shadow-xl transition-all">
                                <div className='flex justify-between items-center'>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6  text-right text-primary-300"
                                    >
                                        {title}
                                    </Dialog.Title>
                                    <div className='p-1 bg-primary-1100 rounded-full'>
                                        <AiOutlineClose size={18} className="cursor-pointer text-primary-400" />
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}