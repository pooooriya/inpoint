
import { Popover } from '@headlessui/react'

type PopoverProps = {
    Icon: React.ReactNode
    children: React.ReactNode
}
export const PopoverComponent = ({ Icon, children }: PopoverProps): JSX.Element => {
    return (
        <Popover className="relative">
            <Popover.Button className='flex justify-center items-center'>{Icon}</Popover.Button>
            <Popover.Panel className="fixed z-20 p-2">
                {children}
            </Popover.Panel>
        </Popover>
    )
}


