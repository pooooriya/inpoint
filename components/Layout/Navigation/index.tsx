import { NavigationTail } from "../NavigationTail"
import Config from 'inpoint.config';
import { HiUserGroup } from "react-icons/hi";
import { ChatRoom } from "components/Chat";
import { AiOutlineClose } from "react-icons/ai";
import { Participant } from "components";

type NavigationProps = {
    videoSize: number
}
export const Navigation = ({ videoSize }: NavigationProps) => {
    return (
        <div className="flex flex-col h-inherit relative">
            <div className="absolute inset-0 z-10 bg-primary-1100 h-inherit">
                <div className="flex p-5  border-b border-primary-800 bg-primary-1000 justify-between items-center">
                    <h2 className="text-primary-300 text-xl text-ellipsis overflow-hidden whitespace-nowrap">گفتگوها رویداد</h2>
                    <AiOutlineClose size={25} className="cursor-pointer text-primary-400" />
                </div>
                {/* <ChatRoom videoSize={videoSize} /> */}
                {/* <Participant videoSize={videoSize} /> */}
            </div>
            <div className="flex flex-col px-4 py-3 border-b border-primary-800 bg-primary-1000">
                <h2 className="text-primary-300 text-xl text-ellipsis overflow-hidden whitespace-nowrap">رویداد برنامه نویسی تحت وبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت وبرویداد برنامه نویسی تحت وب</h2>
                <h5 className="text-primary-600 mt-1 flex ">
                    <HiUserGroup className="ml-1" />
                    <span>
                        300 نفر
                    </span>
                </h5>
            </div>
            <div className="flex flex-wrap justify-center items-center p-2 h-inherit  content-start overflow-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700" style={{
                height: `calc(100vh - ${videoSize}px)`
            }}>
                {Config.navigations.map((nav) => (
                    <div className="w-6/12 flex justify-center items-center p-2">
                        <NavigationTail key={nav.id} title={nav.name} icon={nav.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

