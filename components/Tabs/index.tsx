import { Tab } from "@headlessui/react"
import { Chat, Button, Setting, Participant } from "components"
import { Fragment } from "react"
import { FiSettings } from 'react-icons/fi'
import { TabItem } from "./TabItem"
import Config from 'inpoint.config'

export const Tabs = () => {
    return (
        <Tab.Group defaultIndex={0}>
            <Tab.List className="flex text-sm items-center w-full pt-3 border-b-2 border-primary-900 text-primary-300 font-semibold">
                {Config?.tabs?.map(({ id, name }) => (
                    <Tab as={Fragment} key={id}>
                        {({ selected }) => (
                            <div className="w-3/12 outline-none">
                                <TabItem Selected={selected} Title={name} />
                            </div>
                        )}
                    </Tab>
                ))}
                <Tab as={Fragment}>
                    <div className='flex justify-end pl-5 w-3/12 outline-none mb-2'>
                        <Button icon={<FiSettings size={18} />} variant="icon" />
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
