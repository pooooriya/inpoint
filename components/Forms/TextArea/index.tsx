type TextAreaProps = {
    placeholder?: string
    rows?: number
}

export const TextArea = ({ placeholder, rows = 3 }: TextAreaProps) => {
    return (
        <textarea rows={rows} className="scrollbar-thin p-3 scrollbar-thumb-slate-700 scrollbar-track-slate-500 py-1 resize-none w-full text-sm bg-transparent outline-none placeholder:font-normal text-primary-100 placeholder:text-primary-300 placeholder:text-right" placeholder={placeholder} />
    )
}

