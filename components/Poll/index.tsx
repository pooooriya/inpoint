import { Button, Switch, TextArea } from "components"
import { Input } from "components/Forms/Input"
import { useRef, useState } from "react"
import { BiPlus } from "react-icons/bi"

type PollType = {
}
export const Poll = ({ }: PollType) => {
    const [questionCount, setQuestionCount] = useState(1);
    const dummyRef = useRef<any>();
    const handleAddNewQuestion = () => {
        setQuestionCount(prev => prev + 1);
        setTimeout(() => {
            dummyRef?.current?.scrollIntoView({ behavior: 'smooth' })
        }, 50);
    }
    return (
        <div className="flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mt-5 text-primary-300">
                    <h4>
                        سوال
                    </h4>
                    <span className="text-xs">100</span>
                </div>
                <TextArea type="primary" placeholder="سوال خود را وارد کنید ..." />
                <div className="flex items-center mt-5">
                    <Switch className="mb-1" />
                    <h4 className="mr-2 text-primary-400 font-bold">نمایش پاسخ ها</h4>
                </div>
                <div className="flex flex-col">
                    <ul className="[&_li]:pb-5 pt-5">
                        {Array.from(new Array(questionCount)).map((i, index) => (
                            <li>
                                <Input variant="primary" lable="سوال 1" key={index} />
                            </li>
                        ))}
                    </ul>
                    <div className="text-primary-300 flex items-center pb-2 hover:underline cursor-pointer hover:text-primary-100">
                        <BiPlus className="text-lg" />
                        <h6 className="text-xs" onClick={handleAddNewQuestion}>افزودن پاسخ جدید</h6>
                    </div>
                </div>
            </div>
            <div className="mt-3">
                <Button variant="secondary" title="تایید و ساخت نظرسنجی" className="text-xl flex justify-center w-full" />
            </div>
            <div id="dummy_div" ref={dummyRef} />
        </div>
    )
}


