import { IconType } from "react-icons"

export interface InpointConfig {
    components: InpointComponentConfig
    connectionStrings: InpointConnections
    notifications: InpointNotifications
}

export interface InpointNotifications {
    user_disconnected_message: InpointNotificationPayload,
    user_retry_connection_failed_message: InpointNotificationPayload
}
export type InpointNotificationPayload = {
    message: string,
    description: string,
    buttonText?: string
}
export interface InpointConnections {
    socketURL: string
}
export interface InpointComponentConfig {
    navigations: NavigationConfigType[]
    tabs: inpointTabItem[]
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
