type ChatLayout = {
    children: React.ReactNode
}
const ChatLayout = ({ children }: ChatLayout) => {
    return (
        <div className='relative h-[calc(100vh-148px)]'>
            {children}
        </div>

    )
}


export default ChatLayout