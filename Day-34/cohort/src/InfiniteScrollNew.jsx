import React, { useEffect, useState } from 'react'

const InfiniteScrollNew = () => {
    const [data, setdata] = useState([...new Array(60)]);

    useEffect(() => {
        const observer = new IntersectionObserver(handelInterSection)
    }, [])


    return (
        <div className='bg-yellow-100 w-100  h-100 overflow-y-scroll'>
            {data.map((row, index) => {
                return <div className='border-b py-2 text-center' key={index}>
                    {index + 1}
                </div>
            })}
        </div>
    )
}

export default InfiniteScrollNew