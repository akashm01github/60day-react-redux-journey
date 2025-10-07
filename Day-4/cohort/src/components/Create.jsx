import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid'
import { DataContext } from '../context/UserContext';

const Create = () => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [proffesion, setProffesion] = useState('');

    const {usersData,setusersData} = useContext(DataContext);
    
    
    
    const submitHandeler = (e) => {
        e.preventDefault();

        let newData = {
            id: nanoid(),
            username,
            proffesion,
            age
        }

        let x = [...usersData];

        x.push(newData);

        setusersData(x);

        setUsername('');

        setAge('');

        setProffesion('')
    }


    return (
        <div>
            {/* Creating Part */}
            <form onSubmit={(e) => { submitHandeler(e) }} className='w-[300px] bg-[#FCF9EA] flex flex-col gap-4  border px-5 py-4 rounded'>
                <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Enter Your Name' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
                <input value={age} onChange={(e) => { setAge(e.target.value) }} type="text" placeholder='Enter Your Age' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
                <input value={proffesion} onChange={(e) => { setProffesion(e.target.value) }} type="text" placeholder='Enter Your Proffesion' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
                <button className='bg-[#FFA4A4] hover:bg-[#FA7070]  text-[#FCF9EA] px-4 py-2 rounded-xl font-semibold active:scale-90 transition-all cursor-pointer'>Submit</button>
            </form>
        </div>
    )
}

export default Create