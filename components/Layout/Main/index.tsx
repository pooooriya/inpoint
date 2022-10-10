import { useEffect, useRef, useState } from "react"
import { Header } from "../Header"
import { Navigation } from "../Navigation";

type MainProps = {

}
export const Main = (props: MainProps) => {
    const video = useRef<HTMLIFrameElement>(null);
    const [videoSize, setVideoSize] = useState<number | undefined>(0);
    const handleResizeVideo = () => {
        setVideoSize(video?.current?.getClientRects()[0].height)
    }
    useEffect(() => {
        handleResizeVideo();
        window.addEventListener("resize", handleResizeVideo)
        return () => window.removeEventListener("resize", handleResizeVideo);
    }, [])

    return (
        <div className="bg-primary-1000 h-full p-0 flex flex-col md:p-3 lg:p-5 ">
            <div className="hidden lg:block mb-2 xl:flex flex-shrink-0 justify-center items-center w-full">
                <Header />
            </div>
            <div className="fixed lg:relative inset-0 overflow-hidden h-full flex flex-col lg:flex-row justify-center items-center">
                <div className="flex justify-center items-center w-full">
                    <iframe className="aspect-video lg:rounded-xl w-full h-full" ref={video} src="https://player.arvancloud.com/index.html?config=https://inpoint.arvanlive.com/inp/origin_config.json&skin=shaka" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
                </div>
                <div className="bg-primary-1100 lg:hidden w-full" style={{
                    height: `calc(100vh - ${Math.floor(videoSize)}px)`
                }}>
                    <Navigation videoSize={videoSize ?? 0} />
                </div>
            </div>
        </div>
    )
}

