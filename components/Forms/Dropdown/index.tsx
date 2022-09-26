import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { MdContentCopy } from 'react-icons/md'
type DropDownProps = {
    Icon?: React.ReactNode
    Title: string
}

export const DropDown = ({ Title, Icon }: DropDownProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="flex items-center border-2 border-secondary px-4 py-1 rounded-xl font-medium outline-none text-lg hover:bg-opacity-70 hover:transition-colors hover:duration-300">
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
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 px-3 py-1  z-10 mt-4 w-72 origin-top-right rounded-md bg-primary-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2 text-right ">
                        <h5 className='text-primary-300 text-sm font-bold px-2'>لینک رویداد</h5>
                        <Menu.Item >
                            <div className='cursor-pointer p-2 border mt-2 border-primary-800  bg-primary-1000 rounded-lg flex items-center'>
                                <div className='p-3 rounded-xl  bg-primary-800'>
                                    <MdContentCopy className='text-primary-300' />
                                </div>
                                <div className='mr-2 break-all '>
                                    <h5 className='text-sm'>لینک دعوت</h5>
                                    <h6 className='text-xs'>https://google.com/dsaiajsfipgaigjs/gadgdadgagda/gadgdaagdgda//ggaddgagda/gadadgadggda</h6>
                                </div>
                            </div>
                        </Menu.Item >
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
