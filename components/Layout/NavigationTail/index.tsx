import classNames from "classnames"
import { IconType } from "react-icons/lib"

type NavigationTailProps = {
    title: string,
    icon: IconType
    onClick: () => void,
    disabled?: boolean,
}
export const NavigationTail = ({ title, icon, onClick, disabled }: NavigationTailProps) => {
    console.log(disabled);

    return (
        <div className={classNames("bg-primary-1000 flex flex-col justify-center items-center text-center w-full cursor-pointer hover:bg-opacity-70 rounded-xl h-full", disabled && 'bg-primary-700 cursor-not-allowed')} onClick={() => !disabled && onClick()}>
            <span>
                {icon({ className: "text-primary-500 mb-2 text-2xl lg:text-5xl" })}
            </span>
            <h4 className="text-primary-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis w-[95%]">{title}</h4>
        </div>
    )
}

