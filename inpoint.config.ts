import { BsFillChatQuoteFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineQuestionCircle, AiOutlineLink, AiOutlineSetting } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { InpointConfig } from 'types'

const Config: InpointConfig = {
    components: {
        chat: {
            chat_disable_text: "امکان ارسال چت توسط میزبان غیر فعال شد"
        },
        navigations: [
            { id: 1, name: "گفتگو ها", icon: BsFillChatQuoteFill, type: "navigation", slug: "chats" },
            { id: 2, name: "شرکت کنندگان", icon: HiUserGroup, type: "navigation", slug: "participants" },
            { id: 3, name: "ایجاد نظرسنجی", icon: AiOutlineQuestionCircle, type: "drawer", slug: "polls" },
            { id: 4, name: "لینک های رویداد", icon: AiOutlineLink, type: "drawer", slug: "links" },
            { id: 5, name: "تنظیمات", icon: AiOutlineSetting, type: "navigation", slug: "settings" },
            { id: 5, name: "خروج رویداد", icon: BiExit, type: "modal", slug: "exit" },
        ],
        tabs: [
            {
                id: 1,
                name: "گفتگوی عمومی"
            },
            {
                id: 2,
                name: "شرکت کنندگان"
            }
        ]
    },
    connectionStrings: {
        socketURL: process.env["SOCKET_URL"] ?? "http://188.121.121.8:3002"
    },
    notifications: {
        user_disconnected_message: {
            message: "متاسفانه ارتباط شما با سیستم قطع شد",
            description: "لطفا اتصال خود را بررسی کنید",
            buttonText: "در حال تلاش برای اتصال مجدد"
        },
        user_retry_connection_failed_message: {
            message: "متاسفانه نتوانستیم به سرور متصل شویم لطفا مجددا تلاش کنید",
            description: "برای اتصال مجدد گزینه پایین را کلیک کنید",
            buttonText: "اتصال مجدد"
        },
        user_connect_to_socket: "سیستم شما با موفقیت متصل شد"
    },
}

export default Config;