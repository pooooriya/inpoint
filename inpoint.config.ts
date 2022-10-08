import { BsFillChatQuoteFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineQuestionCircle, AiOutlineLink, AiOutlineSetting } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'

const Config: InpointConfig = {
    navigations: [
        { id: 1, name: "گفتگو ها", icon: BsFillChatQuoteFill },
        { id: 2, name: "شرکت کنندگان", icon: HiUserGroup },
        { id: 3, name: "ایجاد نظرسنجی", icon: AiOutlineQuestionCircle },
        { id: 4, name: "لینک های رویداد", icon: AiOutlineLink },
        { id: 5, name: "تنظیمات", icon: AiOutlineSetting },
        { id: 5, name: "خروج رویداد", icon: BiExit },
    ]
}

export default Config;