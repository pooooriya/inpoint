import { Tab } from "@headlessui/react"
import { Chat, Button, Setting, Participant } from "components"
import { inpointConfig } from "config"
import { Fragment } from "react"
import { FiSettings } from 'react-icons/fi'
import { TabItem } from "./TabItem"

export const Tabs = () => {
    return (
        <Tab.Group defaultIndex={0}>
            <Tab.List className="flex text-sm items-center w-full pt-3 border-b-2 border-primary-900 text-primary-300 font-semibold">
                {inpointConfig?.components?.tabs?.tabItems?.map(({ key, name }) => (
                    <Tab as={Fragment} key={key}>
                        {({ selected }) => (
                            <div className="w-3/12 outline-none">
                                <TabItem Selected={selected} Title={name} />
                            </div>
                        )}
                    </Tab>
                ))}
                <Tab as={Fragment}>
                    <div className='flex justify-end pl-5 w-3/12 outline-none mb-2'>
                        <Button icon={<FiSettings size={18} />} type="icon" />
                    </div>
                </Tab>
            </Tab.List >
            <Tab.Panels>
                <Tab.Panel>
                    <Chat type="public" />
                </Tab.Panel>
                <Tab.Panel>
                    <Chat type="private" />
                </Tab.Panel>
                <Tab.Panel>
                    <Participant />
                </Tab.Panel>
                <Tab.Panel>
                    <Setting />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group >
    )
}
