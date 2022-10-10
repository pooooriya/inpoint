import { Main } from "./Main"
import { Sidebar } from "./Sidebar"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    return (
        <div className="flex h-screen">
            <div className="hidden lg:flex md:basis-[400px] w-full flex-shrink-0 flex-grow-0">
                <Sidebar />
            </div>
            <div className="flex-auto">
                <Main />
            </div>
        </div>
    )
}
