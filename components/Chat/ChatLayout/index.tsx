type ChatLayout = {
    children: React.ReactNode
    videoSize: number
}
const ChatLayout = ({ children, videoSize }: ChatLayout) => {
    return (
        <div className='relative bg-primary-1100'>
            {children}
        </div>

    )
}


export default ChatLayout