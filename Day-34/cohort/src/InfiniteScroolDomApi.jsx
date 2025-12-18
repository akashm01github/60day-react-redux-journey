import React, { useState } from 'react'

const InfiniteScroolDomApi = () => {
    const [data, setdata] = useState([...new Array(40)]);

    const [laoading, setlaoading] = useState(false);

    const THRESEHOLD = 20;

     const loadMore = () => {
        setlaoading(true)
        setTimeout(() => {
            setdata((prev) => [...prev, ...new Array(10)]);
            setlaoading(false)
        }, 3000);
    }

    function handelScrool(event) {
        const scrollTop = event.target.scrollTop;

        const clientHeight = event.target.clientHeight;

        const scrollHeight = event.target.scrollHeight;

        const remainingScrool = Math.floor(scrollHeight - (scrollTop+clientHeight));

        
        
        console.log(remainingScrool)

        if(remainingScrool < THRESEHOLD && !laoading){
            loadMore()
        }
    }

   

    return (
        <div onScroll={handelScrool} className='bg-yellow-100 w-100  h-100 overflow-y-scroll'>
            {data.map((row, index) => {
                return <div className='border-b py-2 text-center' key={index}>
                    {index + 1}
                </div>
            })}
            {laoading && <div className='text-center text-xl bg-red-200'>Loading...</div>}
        </div>
    )
}

export default InfiniteScroolDomApi

