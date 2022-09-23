import { Main } from "./Main"
import { Sidebar } from "./Sidebar"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="flex h-screen">
            <div className="flex-[0_0_400px]">
                <Sidebar />
            </div>
            <div className="flex-auto">
                <Main />
            </div>
        </div>
    )
}
