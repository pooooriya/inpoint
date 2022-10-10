import { IconType } from "react-icons/lib"

type NavigationTailProps = {
    title: string,
    icon: IconType
    onClick: () => void,
}
export const NavigationTail = ({ title, icon, onClick }: NavigationTailProps) => {
    return (
        <div className="bg-primary-1000 flex flex-col justify-center items-center text-center w-full py-5 cursor-pointer hover:bg-opacity-70 rounded-xl" onClick={onClick}>
            <span>
                {icon({ className: "text-primary-500 mb-2 text-2xl lg:text-5xl" })}
            </span>
            <h4 className="text-primary-300 text-sm whitespace-nowrap overflow-hidden text-ellipsis w-[95%]">{title}</h4>
        </div>
    )
}

