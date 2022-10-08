import { NavigationTail } from "../NavigationTail"
import Config from 'inpoint.config';
export const Navigation = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col px-4 py-2 border-b border-primary-800 bg-primary-1000">
                <h2 className="text-primary-300 text-sm">رویداد برنامه نویسی تحت وب</h2>
                <h5 className="text-primary-600 text-sm mt-1">300 نفر</h5>
            </div>
            <div className="flex flex-wrap justify-center items-center p-2">
                {Config.navigations.map((nav) => (
                    <div className="w-6/12 flex justify-center items-center p-2">
                        <NavigationTail key={nav.id} title={nav.name} icon={nav.icon} />
                    </div>
                ))}
            </div>
        </div>
    )
}

