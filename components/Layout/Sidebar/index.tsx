import { Tabs } from "components"
import Image from "next/image"

type SidebarProps = {
    children?: React.ReactNode
}
export const Sidebar = (props: SidebarProps) => {
    return (
        <div className="dark:bg-primary-1100 min-h-full w-full">
            <div className="px-5 pt-5">
                <Image src="/assets/images/logo.svg" width={60} height={60} />
            </div>
            <Tabs />
        </div>
    )
}