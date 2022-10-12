type ChatLayout = {
    children: React.ReactNode
    videoSize: number
}
const ChatLayout = ({ children, videoSize }: ChatLayout) => {
    return (
        <div className='relative lg:!h-[calc(100vh-148px)] bg-primary-1100'>
            {children}
        </div>

    )
}


export default ChatLayout