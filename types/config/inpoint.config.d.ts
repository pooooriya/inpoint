export interface InpointConfig {
    components: InpointComponentConfig
    connectionStrings: InpointConnections
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
