import { Switch } from '@headlessui/react'
import { useState } from 'react'
import cs from 'classnames'
export const SwitchComponent = () => {
    const [enabled, setEnabled] = useState(false)
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={cs(!enabled && 'bg-opacity-60', "bg-secondary relative flex items-center  h-[25px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2focus-visible:ring-white focus-visible:ring-opacity-75")}
        >
            <div
                className={`${enabled ? '-translate-x-[2px]' : '-translate-x-6'}
            justify-center items-center pointer-events-none flex h-[20px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            >
                <div className='flex flex-col justify-center items-center'>
                </div>
            </div>
        </Switch >
    )
}

