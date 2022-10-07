import cs from 'classnames'

type TabItemProps = {
    Selected?: boolean
    Title: string
}

export const TabItem = ({ Selected, Title }: TabItemProps) => {
    return (
        <div className={cs('flex flex-col select-none', Selected ? " after:w-[90%] after:bg-secondary after:mx-auto  after:h-[5px]  after:rounded-[10px_10px_0px_0px] after:-mb-4 " : null)}>
            <button
                className={cs("mb-1", Selected ? "text-secondary" : null)}
            >
                {Title}
            </button>
            {!Selected && (
                <div className="w-[90%] bg-secondary h-[5px] bg-transparent -mb-4" />
            )}
        </div>
    )
}
