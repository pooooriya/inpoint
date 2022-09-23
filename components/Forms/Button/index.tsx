import cs from 'classnames';

type ButtonProps = {
    type: "primary" | "secondary" | "danger" | "outline"
    title: string
    icon?: React.ReactNode
}

const { btn, btn_danger, btn_primary }: Record<string, string> = {
    btn: "px-4 py-1 rounded-xl font-medium outline-none text-lg hover:bg-opacity-70 hover:transition-colors hover:duration-300",
    btn_danger: "bg-danger",
    btn_primary: "bg-primary-700"
}

export const Button = ({ type, title, icon }: ButtonProps) => {
    switch (type) {
        case "primary":
            return (
                <button className={cs(btn, btn_primary)}>
                    <div className="flex justify-centers items-center">
                        {icon}
                        {title}
                    </div>
                </button>
            )
        case "danger":
            return (<button className={cs(btn, btn_danger)}>
                <div className="flex justify-centers items-center">
                    {icon}
                    {title}
                </div>
            </button>)
        default:
            return (<button className={cs(btn, btn_danger)}>
                <div className="flex justify-centers items-center">
                    {icon}
                    {title}
                </div>
            </button>)
    }
}


