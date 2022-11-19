import { BsFillChatQuoteFill } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { AiOutlineQuestionCircle, AiOutlineLink, AiOutlineSetting } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { InpointConfig, Roles } from 'types'

const Config: InpointConfig = {
    components: {
        chat: {
            chat_disable_text: "امکان ارسال چت توسط میزبان غیر فعال شد",
            remove_message_text: "پیام با موفقیت حذف شد"
        },
        navigations: [
            { id: 1, name: "گفتگو ها", icon: BsFillChatQuoteFill, type: "navigation", slug: "chats", role: null },
            { id: 2, name: "شرکت کنندگان", icon: HiUserGroup, type: "navigation", slug: "participants", role: Roles.HOST },
            { id: 3, name: "ایجاد نظرسنجی", icon: AiOutlineQuestionCircle, type: "drawer", slug: "polls", role: Roles.HOST },
            { id: 3, name: "مشاهده نظرسنجی", icon: AiOutlineQuestionCircle, type: "drawer", slug: "polls", role: Roles.CLIENT },
            { id: 4, name: "لینک های رویداد", icon: AiOutlineLink, type: "drawer", slug: "links", role: null },
            { id: 5, name: "تنظیمات", icon: AiOutlineSetting, type: "navigation", slug: "settings", role: Roles.HOST },
            { id: 5, name: "اتمام رویداد", icon: BiExit, type: "modal", slug: "exit", role: Roles.HOST },
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
        socketURL: process.env["SOCKET_URL"] ?? "http://localhost:5000/"
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
        user_connect_to_socket: "سیستم شما با موفقیت متصل شد",
        user_in_land_page: {
            message: "در حال انتقال به رویداد پخش زنده",
            description: "بعد از چند ثانیه به صفحه رویداد منتقل میشوید",
        },
        user_need_complete_info: "برای ورود به رویداد لطفا نام خود را وارد نمایید"
    },
}

export default Config;