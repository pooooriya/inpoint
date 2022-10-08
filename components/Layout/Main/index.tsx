import { useEffect, useRef, useState } from "react"
import { Header } from "../Header"
import { Navigation } from "../Navigation";

type MainProps = {

}
export const Main = (props: MainProps) => {
    const video = useRef<HTMLVideoElement>(null);
    const [videoSize, setVideoSize] = useState<number | undefined>(0);
    const handleResizeVideo = () => {
        setVideoSize(video.current?.getClientRects()[0].height)
    }
    useEffect(() => {
        window.addEventListener("resize", handleResizeVideo)
        return () => window.removeEventListener("resize", handleResizeVideo);
    }, [])


    return (
        <div className="bg-primary-1000 h-full p-0 flex flex-col lg:p-5">
            <div className="hidden lg:block mb-2">
                <Header />
            </div>
            <div className="fixed lg:relative inset-0">
                <div className="lg:mt-1 lg:rounded-xl overflow-hidden lg:h-full">
                    <video controls className="w-full 2xl:w-full 3xl:w-[85%] aspect-video mx-auto" ref={video}>
                        <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </div>
                <div className="bg-primary-1100 h-6/12 lg:hidden" style={{
                    height: `calc(100vh - ${videoSize}px)`
                }}>
                    <Navigation />
                </div>
            </div>
        </div>
    )
}

