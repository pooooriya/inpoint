export interface InpointConfig {
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
