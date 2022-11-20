import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const FinishPage = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col bg-primary-1000'>

            <Image src="/assets/images/emptyicon.png" width={50} height={50} />
            <h2 className='mt-3 text-primary-400'>
                با تشکر از شرکت شما در این رویداد
            </h2>
            <h3 className='text-primary-400 text-sm mt-1'>
                رویداد مورد نظر به اتمام رسید
            </h3>
        </div>
    )
}

export default FinishPage