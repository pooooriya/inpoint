import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import cs from 'classnames'
import { toast } from 'react-toastify'

type SwitchProps = {
    className?: string
    onClick?: () => void
    activeMessage?: string
    deactiveMessage?: string
    setEnabled: any
    enabled: boolean
}
export const SwitchComponent = ({ enabled, setEnabled, ...props }: SwitchProps) => {
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={cs(" bg-secondary relative flex items-center  h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2focus-visible:ring-white focus-visible:ring-opacity-75", !enabled && 'bg-primary-700', props.className)}
        >
            <div
                className={`${enabled ? '-translate-x-[2px]' : '-translate-x-6'}
            justify-center items-center pointer-events-none flex h-[25px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch >
    )
}

