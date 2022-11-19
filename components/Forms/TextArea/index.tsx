import classNames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

interface TextAreaProps {
    placeholder?: string
    minrows?: number
    maxrow?: number
    type?: "transparent" | "primary"
    error?: string
}

const style = {
    transparent: "scrollbar-thin p-3 scrollbar-thumb-slate-700 scrollbar-track-slate-500 py-1 resize-none w-full text-sm bg-transparent outline-none placeholder:font-normal text-primary-100 placeholder:text-primary-300 placeholder:text-right",
    primary: "p-3 py-1 w-full outline-none bg-primary-600 font-bold placeholder:text-primary-1000 bg-opacity-80 rounded-lg text-sm bg-transparent"
}

export const TextArea = ({ placeholder, type = "transparent", error, maxrow, minrows, ...rest }: TextAreaProps): JSX.Element => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <TextareaAutosize maxRows={maxrow} minRows={minrows} rows={minrows} className={classNames(style[type], error && "border border-danger")} placeholder={placeholder}  {...rest} />
            {error && (<h6 className="text-xs text-danger px-2 py-1 opacity-0 animate-error">{error}</h6>)}
        </div>
    )
}

