import { NavigationTail } from "../NavigationTail"
import Config from 'inpoint.config';
import { HiUserGroup } from "react-icons/hi";
import { ChatRoom } from "components/Chat";
import { Button, Drawer, Participant, Setting, Switch, TextArea } from "components";
import { NavigationOverlay } from "../NavigationOverlay";
import React, { useCallback, useState } from "react";
import { Poll } from "components/Poll";

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


const handleDrawerOverlay = (type: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">]): JSX.Element | null => {
    switch (type) {
        case "polls":
            return (<Poll />)
        default:
            return null
    }
}
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
        <>
            {CurrentNavigationComponent && <NavigationOverlay isOpen={isOpen} setIsOpen={setIsOpen} title={CurrentNavigationComponent.name}>
                {handleNavigationOverlay(CurrentNavigationComponent.slug, videoSize)}
            </NavigationOverlay>}
            <div className="flex flex-col px-4 py-3 border-b border-primary-800 bg-primary-1000">
                <h2 className="text-primary-300 text-sm lg:text-xl text-ellipsis overflow-hidden whitespace-nowrap">رویداد برنامه نویسی تحت وبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت ووبرویداد برنامه نویسی تحت وبرویداد برنامه نویسی تحت وب</h2>
                <h5 className="text-primary-600 mt-1 flex ">
                    <HiUserGroup className="ml-1" />
                    <span>
                        300 نفر
                    </span>
                </h5>
            </div>
            <div className="flex flex-wrap justify-center items-center p-2 content-start overflow-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700">
                {Config.navigations.map((nav) => (
                    <div className="w-[100px] h-[100px] flex justify-center items-center p-2">
                        <NavigationTail key={nav.id} title={nav.name} icon={nav.icon} onClick={() => handleClickTail(nav.slug, nav.type, nav.name)} />
                    </div>
                ))}
            </div>
            {CurrentDrawerComponent && (
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} type="bottom" description="نظرسنجی خود را ایجاد کنید تا کاربران بتوانند در نظر سنجی پخش زنده شرکت کنند" title="تعریف نظرسنجی">
                    {handleDrawerOverlay(CurrentDrawerComponent.slug)}
                </Drawer>
            )}</>

    )
}

