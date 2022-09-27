import cs from 'classnames';

type ButtonProps = {
    type: "primary" | "secondary" | "danger" | "icon"
    title?: string
    icon?: React.ReactNode
}

const { btn, btn_danger, btn_primary }: Record<string, string> = {
    btn: "px-4 py-1 rounded-xl font-medium outline-none text-sm hover:bg-opacity-50 hover:transition-colors hover:duration-300",
    btn_danger: "bg-danger border-danger border-2",
    btn_primary: "bg-primary-700 border-primary-700 border-2"
}

export const Button = ({ type, title, icon }: ButtonProps) => {

    if (!process.env.production) {
        if (type == 'icon') {
            if (title) {
                throw new Error("Button Type icon is not supported Title: " + title + " please remove this props from your components")
            }
        }
    }

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
        case "icon":
            return (<button className={cs(btn)}>
                <div className="flex justify-centers items-center">
                    {icon}
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


