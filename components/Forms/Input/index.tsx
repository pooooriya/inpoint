import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    variant: "primary" | "secondary" | "outlined"
    lable: string
    error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            variant = "primary",
            lable,
            error,
            ...rest
        },
        ref,
    ) => {
        switch (variant) {
            case "primary":
                return (
                    <div className="flex flex-col">
                        <div className="relative">
                            <input type="text" id="floating_filled" className={classNames("block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-primary-900 focus:outline-none focus:ring-0 focus:border-primary-1100 peer", error && "border-2 dark:border-2 border-danger dark:border-danger dark:focus:border-danger focus:border-danger ")} placeholder=" " />
                            <label htmlFor="floating_filled" className={classNames("absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] right-2.5 peer-focus:text-primary-800 peer-focus:dark:text-primary-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4", error && "text-danger dark:text-danger peer-focus:dark:text-danger peer-focus:text-danger")}>{lable}</label>
                        </div>
                        {error && (<h6 className="text-xs text-danger px-2 py-1 opacity-0 animate-error">{error}</h6>)}
                    </div>
                )
            case "secondary":
                return (
                    <div className="flex flex-col">
                        <div className="relative z-0">
                            <input ref={ref} type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...rest} />
                        </div>
                        {error && (<h6 className="text-xs text-danger px-2 py-1 opacity-0 animate-error">{error}</h6>)}
                    </div>

                )
            case "outlined":
                return (
                    <div className="flex flex-col">
                        <div className="relative">
                            <input ref={ref} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...rest} />
                            <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] right-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-4">Floating filled</label>
                        </div>
                        {error && (<h6 className="text-xs text-danger px-2 py-1 opacity-0 animate-error">{error}</h6>)}
                    </div>
                )
            default:
                return (
                    <div className="flex flex-col">
                        <div className="relative">
                            <input ref={ref} type="text" id="floating_filled" className="block  rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " {...rest} />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] right-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:translate-x-4">Floating filled</label>
                        </div>
                        {error && (<h6 className="text-xs text-danger px-2 py-1 opacity-0 animate-error">{error}</h6>)}
                    </div>
                )
        }
    },
);
