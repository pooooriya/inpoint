import { NavigationTail } from "../NavigationTail"
import Config from 'inpoint.config';
import { HiUserGroup } from "react-icons/hi";
import { ChatRoom } from "components/Chat";
import { Button, Drawer, Participant, Setting, Switch, TextArea } from "components";
import { NavigationOverlay } from "../NavigationOverlay";
import React, { useCallback, useState } from "react";

type NavigationProps = {
    videoSize: number
}
const handleNavigationOverlay = (type: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">], videoSize: number): JSX.Element | null => {
    switch (type) {
        case "chats":
            return (<ChatRoom videoSize={videoSize} />)
        case "participants":
            return (<Participant videoSize={videoSize} />)
        case "settings":
            return (<Setting />)
        default:
            return null
    }
}


// const handleDrawerOverlay = (type: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">], videoSize: number): JSX.Element | null => {
//     switch (type) {
//         case "chats":
//             return (<ChatRoom videoSize={videoSize} />)
//         case "participants":
//             return (<Participant videoSize={videoSize} />)
//         case "settings":
//             return (<Setting />)
//         default:
//             return null
//     }
// }
export const Navigation = ({ videoSize }: NavigationProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [CurrentNavigationComponent, setCurrentNavigationComponent] = useState<{
        slug: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">]
        name: string
    }>();
    const [CurrentDrawerComponent, setCurrentDrawerComponent] = useState<{
        slug: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">]
        name: string
    }>();
    const handleClickTail = useCallback(
        (slug: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">], type: Pick<NavigationConfigType, "type">[keyof Pick<NavigationConfigType, "type">], name: string) => {
            switch (type) {
                case "navigation":
                    setCurrentNavigationComponent({
                        name,
                        slug,
                    })
                    setIsOpen(true);
                    break;
                case "drawer":
                    setCurrentDrawerComponent({
                        name,
                        slug,
                    })
                    setIsOpen(true);
                default:
                    break;
            }
        },
        [CurrentNavigationComponent?.name, CurrentNavigationComponent?.slug],
    )

    return (
        <div className="flex flex-col h-inherit relative">
            {CurrentNavigationComponent && <NavigationOverlay isOpen={isOpen} setIsOpen={setIsOpen} title={CurrentNavigationComponent.name}>
                {handleNavigationOverlay(CurrentNavigationComponent.slug, videoSize)}
            </NavigationOverlay>}
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
                        <NavigationTail key={nav.id} title={nav.name} icon={nav.icon} onClick={() => handleClickTail(nav.slug, nav.type, nav.name)} />
                    </div>
                ))}
            </div>
            {CurrentDrawerComponent && (
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} type="bottom" description="نظرسنجی خود را ایجاد کنید تا کاربران بتوانند در نظر سنجی پخش زنده شرکت کنند" title="تعریف نظرسنجی">
                    <div className="flex flex-col justify-between h-[calc(100%-50px)]">
                        <div>
                            <div className="flex justify-between items-center mt-5 text-primary-300">
                                <h4>
                                    سوال
                                </h4>
                                <span className="text-xs">100</span>
                            </div>
                            <TextArea type="primary" placeholder="سوال خود را وارد کنید ..." />
                            <div className="flex items-center mt-5">
                                <Switch className="mb-1" />
                                <h4 className="mr-2 text-primary-400 font-bold">نمایش پاسخ ها</h4>
                            </div>
                        </div>
                        <Button variant="secondary" title="تایید و ساخت نظرسنجی" className="text-xl flex justify-center" />
                    </div>
                </Drawer>
            )}

        </div>
    )
}

