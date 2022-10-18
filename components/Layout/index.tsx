import { Sidebar } from "./Sidebar"
import { Header } from "./Header"
import { Navigation } from "./Navigation";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = (props: LayoutProps) => {
    const [isFullScreenMode, setIsFullScreenMode] = useState<boolean>(false);
    const handleOrienationChange = (e: MediaQueryListEvent) => {
        if (!e.matches) {
            if (window.innerWidth <= 900 && window.innerHeight <= 600) {
                setIsFullScreenMode(true);
            } else {
                setIsFullScreenMode(false);
            }
        } else {
            setIsFullScreenMode(false);
        }
    }
    useEffect(() => {
        let portrait = window.matchMedia("(orientation: portrait)");
        portrait.addEventListener("change", handleOrienationChange);
        return () => portrait.removeEventListener("change", handleOrienationChange)
    }, [])

    return (
        <div className="flex h-screen">
            <div className="hidden lg:flex basis-[400px] w-full flex-shrink-0 flex-grow-0">
                <Sidebar />
            </div>
            <div className="flex-auto">
                <div className="bg-primary-1000 h-full p-0 flex flex-col md:p-3 lg:p-5 ">
                    <div className="hidden lg:block mb-2 xl:flex flex-shrink-0 justify-center items-center w-full">
                        <Header />
                    </div>
                    <div className="fixed lg:relative inset-0 overflow-hidden h-full flex flex-col lg:flex-row justify-center items-center rounded-none lg:rounded-lg">
                        <div className="flex relative h-full items-center bg-black justify-center w-full max-w-full min-h-0 flex-auto">
                            <iframe
                                className="w-full aspect-video h-full lg:h-[unset_!important]" src="https://player.arvancloud.com/index.html?config=https://inpoint.arvanlive.com/inpoint/origin_config.json&skin=shaka" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
                        </div>
                        <div className={classNames("bg-primary-1100 lg:hidden w-full flex-auto flex-shrink-0 flex-grow-0 relative", isFullScreenMode && "hidden")}>
                            <Navigation />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
