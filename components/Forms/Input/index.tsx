
type InputProps = {
    type?: 'transparent'
    placeholder?: string
}
export const Input = ({ type, placeholder }: InputProps): JSX.Element => {
    switch (type) {
        case 'transparent':
            return <input className="bg-transparent outline-none w-full h-full text-primary-200 placeholder:text-primary-200" placeholder={placeholder} />
        default:
            return <input />
    }
}

