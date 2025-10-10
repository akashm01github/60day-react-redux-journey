import React, { useContext } from 'react'
import { ContactContext } from '../context/UserConext';

const About = () => {
    const {usersData, setusersData} = useContext(ContactContext);
    console.log(usersData)
  
    const renderData = usersData.map((elem,idx)=>{
        return <div key={idx} className='flex bg-[#EBD9D1] text-[#19183B] rounded-lg  flex-col gap-2 justify-center items-start border px-4 py-2'>
           <div className='flex justify-center items-center  w-full'>
            <img className='w-[300px] h-[200px] object-cover  rounded-xl' src={elem.profile_url} alt="" />
           </div>
           <h1 className='text-3xl'><b className='bg-[#FFA4A4] px-2 rounded-lg mr-2'>Name:</b>{elem.name}</h1>
           <h1 className='text-2xl'><b className='bg-[#BADFDB] px-2 rounded-lg mr-2'>Age</b>: {elem.age}</h1>
           <h1 className='text-2xl'><b className='bg-[#FFBDBD] px-2 rounded-lg mr-2'>Email</b>: {elem.email}</h1>
        </div>
    })
  return (
    <div className='flex flex-col gap-4 justify-center items-center  py-2 px-4'>
      {renderData}
    </div>
  )
}

export default About