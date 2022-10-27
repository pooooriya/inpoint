import React, { Fragment, PropsWithChildren } from 'react'
import { Transition } from '@headlessui/react'

interface IOverlayNotification extends PropsWithChildren {
    isOpen?: boolean
}
export const OverlayNotification: React.FunctionComponent<IOverlayNotification> = ({ isOpen = true, children }) => {
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
                <div className='bg-primary-1100 opacity-90 fixed inset-0 w-full h-full z-50 flex justify-center items-center md:text-3xl text-xl text-white flex-col'>
                    {children}
                </div>
            </Transition.Child>
        </Transition>

    )
}

