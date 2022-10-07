type TextAreaProps = {
    placeholder?: string
    rows?: number
    type?: "transparent" | "primary" | "secondary"
}

export const TextArea = ({ placeholder, rows = 5, type = "transparent" }: TextAreaProps): JSX.Element => {
    switch (type) {
        case "transparent":
            return (
                <textarea rows={rows} className="scrollbar-thin p-3 scrollbar-thumb-slate-700 scrollbar-track-slate-500 py-1 resize-none w-full text-sm bg-transparent outline-none placeholder:font-normal text-primary-100 placeholder:text-primary-300 placeholder:text-right" placeholder={placeholder} />
            )
        case "primary":
            return (
                <textarea rows={rows} className=" p-3 py-1 w-full outline-none bg-primary-600 font-bold placeholder:text-primary-1000 bg-opacity-80 rounded-lg text-sm bg-transparent" placeholder={placeholder} />
            )
        default:
            return (
                <textarea rows={rows} className=" p-3 py-1 w-full text-sm bg-transparent" placeholder={placeholder} />
            )
    }
}

