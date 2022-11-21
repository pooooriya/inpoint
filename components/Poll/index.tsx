import { digitsEnToFa } from "@persian-tools/persian-tools"
import classNames from "classnames"
import { Button, Switch, TextArea } from "components"
import { Input } from "components/Forms/Input"
import { AppContext } from "context"
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react"
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { BiPlus } from "react-icons/bi"
import { toast } from "react-toastify"
import { Roles, SocketEventEmitter } from "types"
import { VoteContextActionType } from "types/context"

type PollType = {

}

type questions = {
    id: number,
    content: string,
    isAnswer: any,
    point: number,
}
type FormInput = {
    title: string,
    showAnswer: boolean,
    room: string,
    questions: questions[]
}
export const Poll = ({ }: PollType) => {
    const { event, socket, vote, auth } = useContext(AppContext).state;
    console.log(vote);

    const dispatch = useContext(AppContext).dispatch;
    const { control, register, handleSubmit, formState: { errors, isDirty, isValid }, getValues, reset, setValue } = useForm<FormInput>({
        defaultValues: {
            title: '',
            showAnswer: false,
            room: event.title,
            questions: []
        }
    });

    const handleAnswerVote = (answer: number) => {
        dispatch({
            type: VoteContextActionType.USER_ANSWERED_VOTE,
            payload: answer
        })
        socket?.emit(SocketEventEmitter.ANSWER_VOTE, {
            answer,
            room: event.title
        })
    }
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control,
        name: "questions",
    });
    const [voteHasAnswer, setVoteHasAnswer] = useState(false);

    useEffect(() => {
        if (vote.title) {
            handleUndoCreateVoteAgain();
        }
        if (fields.length == 0) {
            append({
                content: '',
                id: fields.length + 1,
                isAnswer: false,
                point: 0
            });
        } else {
            var removeItem = [...new Array(fields.length)];
            remove(removeItem)
        }
    }, [])

    const dummyRef = useRef<any>();
    const handleAddNewQuestion = () => {
        if (fields.length <= 6) {
            append({
                content: '',
                id: fields.length + 1,
                isAnswer: false,
                point: 0
            });
        }
        setTimeout(() => {
            dummyRef?.current?.scrollIntoView({ behavior: 'smooth' })
        }, 50);
    }

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        if (data.questions.length <= 1) {
            toast.error("حداقل دو پاسخ برای یک نظرسنجی باید انتخاب شود", {
                delay: 500,
                hideProgressBar: true,
                position: "top-left",
                closeButton: false,
                autoClose: 1000
            })
            return;
        }
        dispatch({
            type: VoteContextActionType.USER_RESET_ANSWERS
        })
        if (voteHasAnswer && data.questions.filter(n => n.isAnswer).length === 0) {
            toast.error("حداقل یک پاسخ باید به عنوان گزینه درست انتخاب شود ", {
                delay: 500,
                hideProgressBar: true,
                position: "top-left",
                closeButton: false,
                autoClose: 1000
            })
            return;
        }
        // convert isAnswer to bool 

        data.questions.filter(n => n.isAnswer == 'true').forEach(n => n.isAnswer = true);
        socket?.emit(SocketEventEmitter.CREATE_NEW_VOTE, {
            title: data.title,
            room: event.title,
            showAnswer: voteHasAnswer,
            questions: data.questions
        })
        reset();
    };

    const handleCreateVoteAgain = () => {
        dispatch({
            type: VoteContextActionType.RESET_VOTE
        })
    }

    const handleUndoCreateVoteAgain = () => {
        dispatch({
            type: VoteContextActionType.UNDO_RESET_VOTE
        })
    }
    console.log(vote);


    return (
        <>
            {
                auth.role === Roles.HOST && vote.needResetVote ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between">
                        <div className="z-10 flex-1 bg-primary-1100 h-inherit flex flex-col overflow-auto pb-32">
                            <div className="flex justify-between items-center mt-5 text-primary-300">
                                <h4>
                                    سوال
                                </h4>
                            </div>
                            <Controller
                                name={"title"}
                                control={control}
                                rules={{
                                    required: {
                                        message: "این فیلد اجباری است",
                                        value: true
                                    }
                                }}
                                render={({ field }) => <TextArea error={errors.title?.message} type="primary" placeholder="سوال خود را وارد کنید ..." minrows={5} maxrow={10}  {...field} />}
                            />

                            <div className="flex justify-center mt-5 flex-col">
                                <div className="flex items-center">
                                    <Switch className="mb-1" setEnabled={setVoteHasAnswer} enabled={voteHasAnswer} />
                                    <h4 className="mr-2 text-primary-400 font-bold">نمایش پاسخ صحیح به کاربر</h4>
                                </div>
                                <h6 className="mt-1 text-primary-800 text-xs font-bold">بعد از پاسخ کاربر گزینه صحیح به او نمایش داده شود</h6>
                            </div>
                            <div className="flex flex-col">
                                <ul className="[&_li]:mb-5 pt-5">
                                    {fields.map((item, index) => (
                                        <li className="flex w-full justify-center items-center bg-primary-1000 p-2 rounded-lg focus:border-2">
                                            {voteHasAnswer && (<input key={item.id} onChangeCapture={(e: any) => {
                                                const questions = [...getValues("questions")];
                                                questions.filter(n => n.id != index + 1).forEach((item, index) => {
                                                    item.isAnswer = false;
                                                })
                                                questions.filter(n => n.id == index + 1).forEach((item, index) => {
                                                    item.isAnswer = true;
                                                })
                                                setValue("questions", questions)
                                            }}
                                                value='true'
                                                type="radio" className="w-6 h-6 mix-blend-multiply text-primary-1100 bg-transparent accent-primary-1100 border-primary-900 focus:text-primary-900 dark:focus:text-primary-1000 dark:ring-offset-gray-1000  dark:bg-gray-700 dark:border-gray-600"{...register(`questions.${index}.isAnswer`)} />)}
                                            <Controller
                                                key={`questions.${item.id}.content`}
                                                name={`questions.${index}.content`}
                                                control={control}
                                                rules={{
                                                    required: {
                                                        message: "این فیلد اجباری است",
                                                        value: true
                                                    }
                                                }}
                                                render={({ field }) => <Input variant="primary" error={errors?.['questions']?.[index]?.['content']?.['message']} lable={`پاسخ گزینه ${digitsEnToFa(index + 1)}`} key={index + 1} className="w-full mr-1"  {...field} />}
                                            />
                                        </li>
                                    )
                                    )}
                                </ul>
                                {fields.length != 6 && (
                                    <div className="text-primary-300 flex items-center pb-2 hover:underline cursor-pointer hover:text-primary-100">
                                        <BiPlus className="text-lg" />
                                        <h6 className="text-xs" onClick={handleAddNewQuestion}>افزودن پاسخ جدید</h6>
                                    </div>
                                )}
                            </div>

                            <div id="dummy_div" ref={dummyRef} />
                        </div>
                        <div className="mt-3 absolute bg-primary-1100 w-full p-5  bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center text-center z-50">
                            <Button type="submit" variant="secondary" title="تایید و ساخت نظرسنجی" className="text-xl flex justify-center w-full" />
                        </div>
                    </form>
                ) : (
                    <div className="flex flex-col relative">
                        <h2 className="text-primary-400 break-words">{vote.title}</h2>
                        {vote?.questions?.map((question, index) => (
                            <div className="break-words line mb-3">

                                {((auth.role == Roles.CLIENT && vote.userIsAnswered && !vote.trueAnswer) || auth.role == Roles.HOST) ? (
                                    <>
                                        <p className={classNames("flex mt-5 text-primary-400  rounded-md  my-2 break-all")}>
                                            {question.content}
                                            {vote.trueAnswer && question.isAnswer && <span className="text-secondary mr-1">(پاسخ درست)</span>}
                                        </p>
                                        <div className="flex justify-center items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${question?.percent ?? 0}%` }}></div>
                                            </div>

                                            <div className="flex text-primary-500">
                                                <h5 className="mr-2 text-primary-800">({digitsEnToFa(question?.point ?? 0)}رای)</h5>
                                                <h4 className="mr-2">{digitsEnToFa(question?.percent ?? 0)}%</h4>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className={classNames("bg-primary-900 p-2 rounded-lg flex items-center cursor-pointer mt-2", vote.userIsAnswered ? question.isAnswer ? 'border-2 border-secondary' : vote.userAnswer == index + 1 && 'border-2 border-danger' : '')} onClick={() => !vote.userIsAnswered && handleAnswerVote(question.id)}>
                                        <div className="pr-2">
                                            <div className=" w-5 h-5 border-primary-1100 border-2 rounded-full z-10 flex justify-center items-center">
                                                {vote.userIsAnswered &&
                                                    ((question.isAnswer) ? (
                                                        <div className="w-3 h-3 bg-secondary rounded-full">
                                                        </div>

                                                    ) : vote.userAnswer == index + 1 && (
                                                        <div className="w-3 h-3 bg-danger rounded-full">
                                                        </div>
                                                    )
                                                    )}
                                            </div>
                                        </div>
                                        <p className={classNames("flex text-primary-400 rounded-md mt-1 mr-2 break-all")} >
                                            {question.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {auth.role === Roles.HOST && (
                            <Button type="submit" variant="secondary" title="ساخت مجدد نظرسنجی" className=" text-lg mt-10 flex justify-center w-full" onClick={handleCreateVoteAgain} />
                        )}
                    </div>
                )
            }

        </>
    )
}

