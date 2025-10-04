import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className='flex justify-between items-center bg-[#E5BEB5] px-4 py-5 '>
                <h2 className='text-2xl font-extrabold'>Logo</h2>
                <div className='flex justify-center items-center gap-4'>
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>Products</h4>
                    <h4>Contacts</h4>
                </div>
            </nav>
        </div>
    )
}

export default Nav