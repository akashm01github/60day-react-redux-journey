import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext';
import { toast } from 'react-toastify';

const Read = () => {

    const {usersData,setusersData} = useContext(DataContext);



    const deleteHandeler = (id)=>{
        const filterUsers = usersData.filter((user)=> user.id != id);
        setusersData(filterUsers);  
        toast.error('Data Deleted')
    }


    let renderData = usersData.map((user) => {
        return (
            <div key={user.id} className="card border border-[#1E93AB] flex flex-col gap-1.3   w-[300px] bg-[#DCDCDC] rounded px-4 py-2">
                <h2 className='text-[#1E93AB]'><b>Name</b>: <span className='text-black'>{user.username}</span></h2>
                <h2 className='text-[#1E93AB]'><b>Age:</b> <span className='text-black'>{user.age}</span></h2>
                <h2 className='text-[#1E93AB]'><b>Profession:</b> <span className='text-black'>{user.proffesion}</span></h2>
                <button onClick={()=>{deleteHandeler(user.id)}} className='px-4 py-1 text-xl bg-red-600 rounded-2xl mt-3 text-white active:scale-85 transition-all cursor-pointer'>Delete</button>
            </div>
        )
    })

    return (
        <div>
            {/* Result Showing Part */}
            <div className='mt-3  w-full flex flex-col justify-center py-4 px-2'>
                <div>
                    {/* <h1 className='text-3xl font-bold text-center'>Result</h1> */}
                </div>
                <div className='flex flex-wrap gap-3 justify-center items-center mt-3'>
                    {renderData}
                </div>
            </div>
        </div>
    )
}

export default Read