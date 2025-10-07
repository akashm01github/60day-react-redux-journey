import React, { useState } from 'react';
import { nanoid } from 'nanoid'

const App = () => {

  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [proffesion, setProffesion] = useState('');


  const [usersData, setusersData] = useState([]);


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
  }

  console.log(usersData);



  return (
    <div className='bg-gray-300 w-full  px-4 py-8 flex flex-col justify-center items-center'>

      {/* Creating Part */}
      <form onSubmit={(e) => { submitHandeler(e) }} className='w-[300px] bg-[#FCF9EA] flex flex-col gap-4  border px-5 py-4 rounded'>
        <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" placeholder='Enter Your Name' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
        <input value={age} onChange={(e) => { setAge(e.target.value) }} type="text" placeholder='Enter Your Age' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
        <input value={proffesion} onChange={(e) => { setProffesion(e.target.value) }} type="text" placeholder='Enter Your Proffesion' className='px-4 py-2 outline-0 border rounded bg-[#BADFDB] text-black font-semibold' />
        <button className='bg-[#FFA4A4] text-[#FCF9EA] px-4 py-2 rounded-xl font-semibold active:scale-90 transition-all cursor-pointer'>Submit</button>
      </form>

      {/* Result Showing Part */}
      <div className='mt-3  w-full flex flex-col justify-center py-4 px-2'>
        <div>
          <h1 className='text-3xl font-bold text-center'>Result</h1>
        </div>
        <div className='flex flex-wrap gap-3 justify-center items-center mt-3'>
          <div className="card border border-[#0C0950] flex flex-col gap-1.3   w-[300px] bg-[#FBE4D6] rounded px-4 py-2">
            <h2 className='text-[#0C0950]  font-semibold'><b>Name</b>: Akash Mukherjee</h2>
            <h2 className='text-[#0C0950]  font-semibold'><b>Age:</b> 24</h2>
            <h2 className='text-[#0C0950]  font-semibold'><b>Profession:</b> Full Stack Developer</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App