import { Switch } from '@headlessui/react'
import { useState } from 'react'
import cs from 'classnames'

type SwitchProps = {
    className?: string
}
export const SwitchComponent = ({ ...props }: SwitchProps) => {
    const [enabled, setEnabled] = useState(false)
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={cs(!enabled && 'bg-opacity-60', "bg-secondary relative flex items-center  h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2focus-visible:ring-white focus-visible:ring-opacity-75", props.className)}
        >
            <div
                className={`${enabled ? '-translate-x-[2px]' : '-translate-x-6'}
            justify-center items-center pointer-events-none flex h-[25px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch >
    )
}

