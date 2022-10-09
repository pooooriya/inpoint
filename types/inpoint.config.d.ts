interface InpointConfig {
    navigations: NavigationConfigType[]
    tabs: inpointTabItem[]
}

type NavigationConfigType = {
    id: number,
    name: string,
    icon: IconType
    type: "navigation" | "drawer" | "modal"
    slug: string
}

type inpointTabItem = {
    id: number,
    name: string
}
