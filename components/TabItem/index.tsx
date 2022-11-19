import cs from 'classnames'

type TabItemProps = {
    Selected?: boolean
    Title: string
}

export const TabItem = ({ Selected, Title }: TabItemProps) => {
    console.log(Selected);

    return (
        <div className={cs('flex flex-col select-none h-[27px] px-3', Selected ? " after:w-[90%] after:bg-secondary after:mx-auto  after:h-[5px]  after:rounded-[10px_10px_0px_0px] after:-mb-4 " : null)}>
            <button
                className={cs("mb-1", Selected ? "text-secondary" : null)}
            >
                {Title}
            </button>
        </div>
    )
}
