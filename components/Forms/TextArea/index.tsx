import { ChangeEvent, useRef, useState } from "react"

type TextAreaProps = {
    placeholder?: string
    rows?: number
    type?: "transparent" | "primary"
}

const style = {
    transparent: "scrollbar-thin p-3 scrollbar-thumb-slate-700 scrollbar-track-slate-500 py-1 resize-none w-full text-sm bg-transparent outline-none placeholder:font-normal text-primary-100 placeholder:text-primary-300 placeholder:text-right",
    primary: "p-3 py-1 w-full outline-none bg-primary-600 font-bold placeholder:text-primary-1000 bg-opacity-80 rounded-lg text-sm bg-transparent"
}

export const TextArea = ({ placeholder, rows = 5, type = "transparent" }: TextAreaProps): JSX.Element => {
    const [textHeight, setTextHeight] = useState(1);
    const IntialScroll = useRef<number>()
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>): void {
        const height = event.target.scrollHeight;
        if (!event.target.value) {
            setTextHeight(1);
        }
        if (!IntialScroll.current) {
            IntialScroll.current = height;
        }
        if (height != IntialScroll.current && event.target.value) {
            setTextHeight(2);
        }

    }
    return (
        <textarea rows={textHeight} className={style[type]} placeholder={placeholder} onChange={handleChange} />
    )
}

