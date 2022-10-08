interface InpointConfig {
    navigations: NavigationConfigType[]
}

type NavigationConfigType = {
    id: number,
    name: string,
    icon: IconType
}