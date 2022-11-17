import { IconType } from "react-icons"

export interface InpointConfig {
    components: InpointComponentConfig
    connectionStrings: InpointConnections
    notifications: InpointNotifications
}

export interface InpointNotifications {
    user_disconnected_message: InpointNotificationPayload,
    user_retry_connection_failed_message: InpointNotificationPayload
    user_in_land_page: InpointNotificationPayload
    user_need_complete_info: string
    user_connect_to_socket: string
}
export type InpointNotificationPayload = {
    message: string,
    description: string,
    buttonText?: string
}
export interface InpointConnections {
    socketURL: string
}

export interface InpointChatPayload {
    chat_disable_text: string
    remove_message_text: string
}
export interface InpointComponentConfig {
    navigations: NavigationConfigType[]
    tabs: inpointTabItem[]
    chat: InpointChatPayload
}

export type NavigationConfigType = {
    id: number,
    name: string,
    icon: IconType
    type: "navigation" | "drawer" | "modal"
    slug: "chats" | "participants" | "exit" | "polls" | "settings" | "links"
}

export type inpointTabItem = {
    id: number,
    name: string
}
