import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineDown } from 'react-icons/ai'

type DropDownProps = {
    Icon?: React.ReactNode
    Title?: string
    Type?: "primary" | "icon"
    children: React.ReactNode
}

export const DropDown = ({ Type = "primary", Icon, Title, children }: DropDownProps): JSX.Element => {
    switch (Type) {
        case "primary":
            return (
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="flex items-center border-2 hover:bg-secondary border-secondary px-4 py-1 rounded-xl font-medium outline-none text-sm hover:border-transparent hover:bg-opacity-70 hover:transition-colors hover:duration-300">
                        <div className='flex items-center ml-3'>
                            <span>
                                {Icon}
                            </span>
                            <span>
                                {Title}
                            </span>
                        </div>
                        <span>
                            {<AiOutlineDown size={12} />}
                        </span>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute text-right right-0 px-3 py-2 z-10 mt-4 w-72 origin-top-right rounded-md bg-primary-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <h5 className='text-primary-300 text-sm font-bold  '>لینک رویداد</h5>
                            <Menu.Item >
                                {children}
                            </Menu.Item >
                        </Menu.Items>
                    </Transition>
                </Menu>

            )
        case "icon":
            return (
                <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="flex items-center text-lg  rounded-xl font-medium outline-none hover:bg-opacity-70 hover:transition-colors hover:duration-300">
                        <div className='flex items-center '>
                            {Icon}
                        </div>
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="flex flex-col absolute text-right left-0 w-32 -top-4 z-10 mt-4 origin-top-right  bg-primary-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-lg overflow-hidden">
                            <Menu.Item >
                                {children}
                            </Menu.Item >
                        </Menu.Items>
                    </Transition>
                </Menu>
            )
    }
}
