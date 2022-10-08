interface InpointConfig {
    navigations: NavigationConfigType[]
    tabs: inpointTabItem[]
}

type NavigationConfigType = {
    id: number,
    name: string,
    icon: IconType
}

type inpointTabItem = {
    id: number,
    name: string
}
