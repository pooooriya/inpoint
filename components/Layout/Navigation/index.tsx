import { NavigationTail } from "../NavigationTail"
import Config from 'inpoint.config';
import { HiUserGroup } from "react-icons/hi";
export const Navigation = () => {
    return (
        <div className="flex flex-col h-inherit">
            <div className="flex flex-col px-4 py-3 border-b border-primary-800 bg-primary-1000">
                <h2 className="text-primary-300 text-xl ">رویداد برنامه نویسی تحت وب</h2>
                <h5 className="text-primary-600 mt-1 flex ">
                    <HiUserGroup className="ml-1" />
                    <span>
                        300 نفر
                    </span>
                </h5>
            </div>
            <div className="flex flex-wrap justify-center items-center p-2 h-inherit content-center">
                {Config.navigations.map((nav) => (
                    <div className="w-6/12 flex justify-center items-center p-2">
                        <NavigationTail key={nav.id} title={nav.name} icon={nav.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

