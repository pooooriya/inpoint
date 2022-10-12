import { Header } from "../Header"
import { Navigation } from "../Navigation";

type MainProps = {

}
export const Main = (props: MainProps) => {
    return (
        <div className="bg-primary-1000 h-full p-0 flex flex-col md:p-3 lg:p-5 ">
            <div className="hidden lg:block mb-2 xl:flex flex-shrink-0 justify-center items-center w-full">
                <Header />
            </div>
            <div className="fixed lg:relative inset-0 overflow-hidden h-full flex flex-col lg:flex-row justify-center items-center rounded-none lg:rounded-lg">
                <div className="flex relative h-full items-center bg-black justify-center w-full max-w-full min-h-0 flex-auto">
                    <iframe
                        className="w-full aspect-video" src="https://player.arvancloud.com/index.html?config=https://inpoint.arvanlive.com/inpoint/origin_config.json&skin=shaka" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} />
                </div>
                <div className="bg-primary-1100 lg:hidden w-full flex-auto flex-shrink-0 flex-grow-0 relative">
                    <Navigation />
                </div>
            </div>
        </div>
    )
}
