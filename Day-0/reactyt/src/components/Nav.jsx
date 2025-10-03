import React from 'react'

const Nav = () => {
    return (
        <>
            <nav className='flex justify-between px-8 py-4 bg-[#E6D8C3]'>
                <h2 className='text-xl font-bold'>Logo</h2>
                <div className='flex gap-4 items-center'>
                    <h4>About</h4>
                    <h4>Home</h4>
                    <h4>Contact</h4>
                    <h4>Services</h4>
                </div>
            </nav>
        </>
    )
}

export default Nav