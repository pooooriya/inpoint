
import { AppContext } from 'context'
import Config from 'inpoint.config'
import { ChangeEvent, Fragment, UIEvent, useCallback, useContext, useEffect, useRef, useState } from 'react'
import Message from '../Message'
import { MessageBox } from '../MessageBox'
import { useForm } from "react-hook-form";
import { Transition } from '@headlessui/react'
import { useVirtualizer } from '@tanstack/react-virtual';

type ChatRoomProps = {

}
export const ChatRoom = ({ }: ChatRoomProps) => {
    const { chats } = useContext(AppContext).state;
    const chatRef = useRef<HTMLUListElement>(null);
    const rowVirtualizer = useVirtualizer({
        count: chats.messages.length,
        getScrollElement: () => chatRef.current,
        estimateSize: () => 50,
        overscan: 10,

    })
    const scrollElement = useRef<HTMLDivElement>(null);
    const [hasNewMessage, setHasNewMessage] = useState<boolean>(false);
    const [lockScroll, setLockScroll] = useState<boolean>(false);
    const handleScroll = (e: any) => {
        const bottom = Math.floor(e.target.scrollHeight - e.target.scrollTop) - 80 > Math.floor(e.target.clientHeight);
        if (bottom) {
            setLockScroll(true);
        } else {
            setLockScroll(false);
            setHasNewMessage(false);
        }
    }
    useEffect(() => {
        if (!lockScroll) {
            setHasNewMessage(false);
        } else {
            setHasNewMessage(true);
        }
    }, [chats.messages.length])


    useEffect(() => {
        if (!lockScroll) {
            handleScrollToBottom()
        }
    }, [rowVirtualizer.getTotalSize()])

    const handleScrollToBottom = useCallback(
        () => {
            rowVirtualizer.scrollToOffset(rowVirtualizer.getTotalSize() + 100, {
                smoothScroll: false
            });
        },
        [rowVirtualizer],
    )

    return (
        <>
            <ul onScroll={handleScroll} ref={chatRef} className="flex-1 p-3 relative overflow-auto scrollbar-thin scrollbar-track-slate-700 scrollbar-thumb-slate-600">
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        width: "100%",
                        position: "relative"
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map(virtualRow => (
                        <div
                            key={virtualRow.key}
                            ref={virtualRow.measureElement}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                minHeight: `${virtualRow.size}px`,
                                transform: `translateY(${virtualRow.start}px)`,
                            }}
                        >
                            <li className='av px-5 py-2' key={'message' + virtualRow.index}>
                                <Message fullname={chats?.messages[virtualRow.index].fullName} text={chats?.messages[virtualRow.index].text} time={chats?.messages[virtualRow.index].time} />
                            </li>
                        </div>

                    ))}
                    {/* {chats?.messages?.sort((a, b) => Date.parse(a.time) - Date.parse(b.time)).map((message, index) =>
                (
                   
                ) */}
                    {/* )} */}
                </div>
                <div ref={scrollElement} />
            </ul>
            <div className='relative'>
                {chats.isActive ? (
                    <div className='flex w-full'>
                        <MessageBox />
                    </div>
                ) : (
                    <div className='flex w-full p-5 text-white text-center justify-center items-center bg-primary-900'>
                        <h2>{Config.components.chat.chat_disable_text}</h2>
                    </div>
                )}
                <Transition appear show={hasNewMessage} as={Fragment} >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className='select-none -top-14 text-sm left-[50%] -translate-x-1/2 absolute bg-secondary text-white rounded-lg px-3 py-1 cursor-pointer' onClick={handleScrollToBottom}>
                            پیام جدید دارید
                        </div>
                    </Transition.Child>
                </Transition>
            </div>

        </>
    )
}
