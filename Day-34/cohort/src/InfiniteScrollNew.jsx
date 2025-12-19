import React, { useEffect, useRef, useState } from 'react'

const InfiniteScrollNew = () => {
    const [data, setdata] = useState([...new Array(60)]);

    const [laoading, setlaoading] = useState(false);

    const arrayListRef = useRef([]);

    const loadMore = () => {
        setlaoading(true)
        setTimeout(() => {
            setdata((prev) => [...prev, ...new Array(10)]);
            setlaoading(false)
        }, 3000);
    }   

    useEffect(() => {
        const observer = new IntersectionObserver(function(entires){
            entires.forEach((entry)=>{
                if(entry.isIntersecting){
                    entry.target.style.backgroundColor = 'red';
                }
                else{
                    entry.target.style.backgroundColor = 'blue';
                }
            })
        },{
                threshold:1
            });

        arrayListRef.current.forEach((el,index)=>{
            observer.observe(el);
        })
    }, [])


    return (
        <div className='bg-yellow-100 w-100  h-100 overflow-y-scroll'>
            {data.map((row, index) => {
                return <div ref={(el)=>(arrayListRef.current[index] = el)} className='border-b py-2 text-center' key={index}>
                    {index + 1}
                </div>
            })}
        </div>
    )
}

export default InfiniteScrollNew