import React from 'react'

const Card = ({userData}) => {
    let {author,download_url,height,width } = userData
  return (
    <div className='bg-[#E6D8C3] rounded-xl px-5 py-3 w-[300px] flex gap-0.5 flex-col justify-center items-center'>
        <img className='w-[100px] h-[100px] object-cover rounded-full' src={download_url} alt="" />
        <h1 className=' rounded px-2 py-1'><b>Name</b>: {author}</h1>
        <h2><b>Width</b>: {width}</h2>
        <h2><b>Height</b>: {height}</h2>
    </div>
  )
}

export default Card