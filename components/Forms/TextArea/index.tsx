import TextareaAutosize from 'react-textarea-autosize';

interface TextAreaProps {
    placeholder?: string
    rows?: number
    type?: "transparent" | "primary"
}

const style = {
    transparent: "scrollbar-thin p-3 scrollbar-thumb-slate-700 scrollbar-track-slate-500 py-1 resize-none w-full text-sm bg-transparent outline-none placeholder:font-normal text-primary-100 placeholder:text-primary-300 placeholder:text-right",
    primary: "p-3 py-1 w-full outline-none bg-primary-600 font-bold placeholder:text-primary-1000 bg-opacity-80 rounded-lg text-sm bg-transparent"
}

export const TextArea = ({ placeholder, type = "transparent", ...rest }: TextAreaProps): JSX.Element => {
    return (
        <TextareaAutosize maxRows={4} className={style[type]} placeholder={placeholder} {...rest} />
    )
}

