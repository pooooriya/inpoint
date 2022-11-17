import { Button, TextArea } from "components"
import { AppContext } from "context";
import { SendMessageEmitter } from "dtos/socket/emitters/sendmessage.emitter.dto";
import React, { memo, TextareaHTMLAttributes, useContext, useRef, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RiSendPlaneFill } from 'react-icons/ri'
import { Roles, SocketEventEmitter } from "types";

type FormInput = {
    text: string
}

type MessageBoxType = {
}
export const MessageBox = memo(({ }: MessageBoxType) => {
    const [textHeight, setTextHeight] = useState(1);
    const { socket } = useContext(AppContext).state
    const { control, handleSubmit, formState: { errors, isDirty, isValid }, getValues, reset } = useForm<FormInput>({
        defaultValues: {
            text: ""
        }
    });
    const onSubmit: SubmitHandler<FormInput> = (data) => {
        socket?.emit<SocketEventEmitter>(SocketEventEmitter.SEND_NEW_MESSAGE, new SendMessageEmitter({
            room: "inpointconnect",
            text: data.text,
            type: Roles.TEACHER
        }))
        reset();
        setTextHeight(1);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 bg-primary-800 flex justify-between items-center w-full">
            <Controller
                name="text"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <TextArea placeholder="کامنت شما ..." rows={textHeight} {...field} />}
            />
            <Button type="submit" disabled={!isValid && !isDirty} variant="icon" className="mr-2 bg-secondary w-[40px] h-[40px] flex justify-center items-center hover:bg-opacity-70 cursor-pointer transition-colors !rounded-lg" icon={<RiSendPlaneFill size={25} className="-rotate-90 text-primary-200" />} />
        </form >
    )
})
