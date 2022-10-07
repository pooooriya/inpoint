import { Header } from "../Header"

type MainProps = {

}
export const Main = (props: MainProps) => {
    return (
        <div className="bg-primary-1000 h-full p-5 flex flex-col ">
            <div className="hidden lg:block mb-2">
                <Header />
            </div>
            <div className="mt-3 rounded-xl overflow-hidden">
                <video controls className="w-full 2xl:w-full 3xl:w-[85%]  aspect-video mx-auto ]">
                    <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
                    Your browser does not support HTML video.
                </video>
            </div>
        </div>
    )
}

