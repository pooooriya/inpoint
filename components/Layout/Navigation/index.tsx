import { NavigationTail } from "../NavigationTail"
import Config from 'inpoint.config';
import { HiUserGroup } from "react-icons/hi";
import { Chat, Drawer, Participant, Setting } from "components";
import { NavigationOverlay } from "../NavigationOverlay";
import React, { useCallback, useContext, useState } from "react";
import { Poll } from "components/Poll";
import { NavigationConfigType, Roles } from "types";
import { MdContentCopy } from "react-icons/md";
import { AppContext } from "context";
import { digitsEnToFa } from "@persian-tools/persian-tools";

const handleNavigationOverlay = (type: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">]): JSX.Element | null => {
    switch (type) {
        case "chats":
            return (<Chat />)
        case "participants":
            return (<Participant />)
        case "settings":
            return (<Setting />)
        default:
            return null
    }
}



export const Navigation = () => {
    const { event, auth, vote } = useContext(AppContext).state;
    const handleCopyToClipBoard = (text: string) => {
        navigator.clipboard.writeText(text)
    }
    const handleDrawerOverlay = (type: Pick<NavigationConfigType, "slug">[keyof Pick<NavigationConfigType, "slug">]): JSX.Element | null => {
        switch (type) {
            case "polls":
                return (<Poll />)
            case "links":
                return (<h1>
                    {event?.link && (
                        <div className='cursor-pointer p-2 border  border-primary-700  bg-primary-1000 rounded-lg flex items-center' onClick={() => handleCopyToClipBoard(event?.link)}>
                            <div className='p-3 rounded-xl  bg-primary-800'>
                                <MdContentCopy className='text-primary-300' />
                            </div>
                            <div className='mr-2 break-all text-primary-500'>
                                <h5 className='text-sm '>لینک رویداد</h5>
                                <h6 className='text-xs'>{event?.link}</h6>
                            </div>
                        </div>
                    )}
                </h1>)
            default:
                return null
        }
    }
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
                    setCurrentDrawerComponent({ name: '', slug: '' })
                    setIsOpen(true);
                    break;
                case "drawer":
                    setCurrentDrawerComponent({
                        name,
                        slug,
                    })
                    setCurrentNavigationComponent({ name: '', slug: '' })
                    setIsOpen(true);
                default:
                    break;
            }
        },
        [CurrentNavigationComponent?.name, CurrentNavigationComponent?.slug],
    )

    return (
        <>
            {CurrentNavigationComponent?.name && <NavigationOverlay isOpen={isOpen} setIsOpen={setIsOpen} title={CurrentNavigationComponent.name}>
                {handleNavigationOverlay(CurrentNavigationComponent.slug)}
            </NavigationOverlay>}
            <div className="flex flex-col px-4 py-3 border-b border-primary-800 bg-primary-1000">
                <h2 className="text-primary-300 text-sm lg:text-xl text-ellipsis overflow-hidden whitespace-nowrap">{event?.description}</h2>
                <h5 className="text-primary-600 mt-1 flex ">
                    <HiUserGroup className="ml-1" />
                    <span>
                        {digitsEnToFa(event.participants.length)} نفر
                    </span>
                </h5>
            </div>
            <div className="flex flex-wrap justify-center items-center p-2 content-start overflow-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700">
                {Config?.components?.navigations?.filter(n => n.role == null || n.role == auth.role).map((nav) => (
                    <div className="h-[100px] w-4/12 flex justify-center items-center p-2">
                        <NavigationTail disabled={nav.role != Roles.HOST && nav.slug == 'polls' && !vote.title} key={nav.id} title={nav.slug == 'polls' && (vote.title || auth.role === Roles.CLIENT) ? 'مشاهده نظرسنجی' : nav.name} icon={nav.icon} onClick={() => handleClickTail(nav.slug, nav.type, nav.name)} />
                    </div>
                ))}
            </div>
            {CurrentDrawerComponent?.name && (
                <Drawer isOpen={isOpen} setIsOpen={setIsOpen} type="bottom" description="" title={CurrentDrawerComponent.name}>
                    {handleDrawerOverlay(CurrentDrawerComponent.slug)}
                </Drawer>
            )}</>

    )
}

