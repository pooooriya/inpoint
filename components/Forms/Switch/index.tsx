import { Switch } from '@headlessui/react'
import { useEffect, useState } from 'react'
import cs from 'classnames'
import { toast } from 'react-toastify'

type SwitchProps = {
    className?: string
    onClick?: () => void
    activeMessage?: string
    deactiveMessage?: string
}
export const SwitchComponent = ({ ...props }: SwitchProps) => {
    const [enabled, setEnabled] = useState(false)
    useEffect(() => {
        if (props.onClick) {
            props.onClick();
        }
        if (enabled) {
            if (props.activeMessage) {
                toast.success(props.activeMessage, {
                    delay: 1000,
                    hideProgressBar: true,
                    position: "top-center",
                    closeButton: false,
                })
            }
        } else {
            if (props.deactiveMessage) {
                toast.success(props.activeMessage, {
                    delay: 1000,
                    hideProgressBar: true,
                    position: "top-center",
                    closeButton: false,
                })
            }
        }
    }, [enabled])

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

