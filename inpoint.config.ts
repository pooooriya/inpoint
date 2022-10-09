import { BsFillChatQuoteFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineQuestionCircle, AiOutlineLink, AiOutlineSetting } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'

const Config: InpointConfig = {
    navigations: [
        { id: 1, name: "گفتگو ها", icon: BsFillChatQuoteFill, type: "navigation", slug: "chats" },
        { id: 2, name: "شرکت کنندگان", icon: HiUserGroup, type: "navigation", slug: "participants" },
        { id: 3, name: "ایجاد نظرسنجی", icon: AiOutlineQuestionCircle, type: "drawer", slug: "polls" },
        { id: 4, name: "لینک های رویداد", icon: AiOutlineLink, type: "drawer", slug: "links" },
        { id: 5, name: "تنظیمات", icon: AiOutlineSetting, type: "navigation", slug: "settings" },
        { id: 5, name: "خروج رویداد", icon: BiExit, type: "modal", slug: "exit" },
    ], tabs: [
        {
            id: 1,
            name: "گفتگوی عمومی"
        },
        {
            id: 2,
            name: "گفتگوی خصوصی"
        },
        {
            id: 3,
            name: "شرکت کنندگان"
        }
    ]
}

export default Config;