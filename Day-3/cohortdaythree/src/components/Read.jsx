import React from 'react'

const Read = ({users,setusers}) => {
    
    let renderUser = users.map((user,idx)=>{
        return <ol key={idx} className='flex gap-3 border px-5 py-2 rounded'>
            <span>Name: {user.username}</span>
            <span>Age: {user.age}</span>
            </ol>
    })
    
    return (
        <div className='w-full'>
            <div className='px-5 py-2 w-full flex justify-center items-center gap-10 flex-col'>
                <h1 className='text-3xl font-semibold'>Result</h1>
                {renderUser}
            </div>
        </div>
    )
}

export default Read