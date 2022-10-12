import Image from "next/image"
import { Tab } from "@headlessui/react"
import { Chat, Button, Setting, Participant } from "components"
import { Fragment } from "react"
import { FiSettings } from 'react-icons/fi'
import { TabItem } from "components/TabItem"
import Config from 'inpoint.config'

type SidebarProps = {
    children?: React.ReactNode
}
export const Sidebar = (props: SidebarProps) => {
    return (
        <div className="dark:bg-primary-1100 flex flex-col flex-1">
            <div className="flex flex-col px-5 pt-5 self-start">
                <Image src="/assets/images/logo.svg" width={60} height={60} />
            </div>
            <div className="flex flex-col">
                <Tab.Group defaultIndex={0}>
                    <Tab.List className="flex relative text-sm items-center pt-3 border-b-2 border-primary-900 text-primary-300 font-semibold w-full">
                        {Config?.tabs?.map(({ id, name }) => (
                            <Tab as={Fragment} key={id}>
                                {({ selected }) => (
                                    <div className="outline-none">
                                        <TabItem Selected={selected} Title={name} />
                                    </div>
                                )}
                            </Tab>
                        ))}
                        <Tab as={Fragment}>
                            <div className='flex justify-end pl-5 outline-none mb-2 absolute top-0 left-0'>
                                <Button icon={<FiSettings size={18} />} variant="icon" />
                            </div>
                        </Tab>
                    </Tab.List >
                    <Tab.Panels>
                        <Tab.Panel>
                            <Chat />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Participant />
                        </Tab.Panel>
                        <Tab.Panel>
                            <Setting />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group >
            </div>
        </div >
    )
}