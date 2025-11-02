import React, { useState } from 'react'

const Nav = () => {

    const [isOpen, setisOpen] = useState(false)
    return (
        <nav className='px-2 py-3 border-b-0 flex items-center justify-between relative md:border-b'>
            <div className='flex gap-2 items-center'>
                <i className="ri-movie-ai-line text-3xl text-red-600"></i>
                <h2 className='text-xl font-extrabold'>MovieStream</h2>
            </div>



            <div className='hidden md:flex justify-center items-center gap-4'>
                <h4>Home</h4>
                <h4>Movies</h4>
                <h4>TVShows</h4>
                <h4>MyList</h4>
                <input type="text" placeholder='Search' className='border-0 rounded py-0.5 px-1 outline-0 bg-[#2a2a2a]' />
            </div>

            <i className="ri-menu-4-line text-3xl text-red-600 md:hidden" onClick={()=>{setisOpen(!isOpen)}}></i>

            <div className={`flex flex-col gap-4 transition-all justify-start absolute bg-[#2a2a2a] rounded top-20 right-2 w-[200px] p-2 ${isOpen? 'block': 'hidden'}`}>
                <h4>Home</h4>
                <h4>Movies</h4>
                <h4>TVShows</h4>
                <h4>MyList</h4>
                {/* <input type="text" placeholder='Search' className='border-0 rounded py-0.5 px-1 outline-0 bg-[#2a2a2a]' /> */}
            </div>
        </nav>
    )
}

export default Nav