export interface inpointTabItem {
    key: number,
    name: string
}
export interface inpointTabComponents {
    tabItems: inpointTabItem[]
}

export interface inpointComponents {
    tabs: inpointTabComponents
}

export interface inpointConfig {
    components: inpointComponents
}