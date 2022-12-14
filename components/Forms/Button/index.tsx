import classNames from 'classnames';
import cs from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

interface CustomButtonProps {
    variant: "primary" | "secondary" | "danger" | "icon" | "info"
    title?: string
    icon?: React.ReactNode
    loading?: boolean
    outlined?: boolean
    disabled?: boolean
};

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes, CustomButtonProps { }

const { btn, btn_icon, btn_disabled, btn_primary, btn_primary_outline, btn_secondary_outline, btn_danger_outline, btn_danger, btn_secondary }: Record<string, string> = {
    btn: "px-4 py-1 rounded-xl font-medium outline-none text-sm hover:bg-opacity-50 hover:border-transparent hover:transition-colors hover:duration-300",
    btn_icon: "px-2 py-2 rounded-full px-0",
    btn_primary: "bg-primary-700 border-primary-700 border-2 ",
    btn_danger: "bg-danger border-danger border-2 ",
    btn_secondary: "bg-secondary text-primary-200 rounded-md text-center",
    btn_primary_outline: "bg-transparent hover:bg-primary-700",
    btn_danger_outline: "bg-danger hover:bg-danger",
    btn_secondary_outline: "bg-secondary hover:bg-secondary",
    btn_disabled: "bg-gray-400 cursor-not-allowed "
}

export const LoadingButton = ({ className }: { className?: string }): JSX.Element => {
    return (
        <svg role="status" className={classNames("inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600", className)} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" className='fill-secondary' />
        </svg>
    )
}

export const Button = ({ variant, title, icon, loading, className, outlined, disabled, ...props }: ButtonProps) => {

    if (!process.env.production) {
        if (variant == 'icon') {
            if (title) {
                throw new Error("Button Type icon is not supported Title: " + title + " please remove this props from your components")
            }
        }
    }

    switch (variant) {
        case "primary":
            return (
                <button className={cs(btn, btn_primary, outlined && btn_primary_outline, disabled && btn_disabled, className)} {...props} >
                    <div className="flex justify-centers items-center">
                        {loading ? <LoadingButton className='ml-2' /> : icon}
                        {title}
                    </div>
                </button>
            )
        case "danger":
            return (<button className={cs(btn, btn_danger, disabled && btn_disabled, outlined && btn_danger_outline, className)} {...props} >
                <div className="flex justify-centers items-center">
                    {loading ? <LoadingButton className='ml-2' /> : icon}
                    {title}
                </div>
            </button>)
        case "secondary":
            return (<button className={cs(btn, btn_secondary, disabled && btn_disabled, outlined && btn_secondary_outline, className)} {...props} >
                <div className="flex justify-centers items-center">
                    {loading ? <LoadingButton className='ml-2' /> : icon}
                    {title}
                </div>
            </button>)
        case "icon":
            return (<button className={cs(btn_icon, disabled && btn_disabled, className)} {...props} >
                <div className="flex justify-centers items-center ">
                    {loading ? <LoadingButton className='ml-2' /> : icon}
                </div>
            </button>)
        default:
            return (<button className={cs(btn, btn_primary)} {...props} >
                <div className="flex justify-centers items-center">
                    {loading ? <LoadingButton className='ml-2' /> : icon}
                    {title}
                </div>
            </button>)
    }
}

