interface InpointConfig {
    navigations: NavigationConfigType[]
    tabs: inpointTabItem[]
}

type NavigationConfigType = {
    id: number,
    name: string,
    icon: IconType
    type: "navigation" | "drawer" | "modal"
    slug: "chats" | "participants" | "exit" | "polls" | "settings" | "links"
}

type inpointTabItem = {
    id: number,
    name: string
}
