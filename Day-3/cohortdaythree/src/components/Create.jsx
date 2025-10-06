import React, { useState } from 'react'

const Create = () => {
    const [uesername, setUesername] = useState('');
    const [ueserage, setUeserage] = useState(0);

    const [usersData, setusersData] = useState([]);


    const [gender, setgender] = useState('')





    const submitHandeler = (e) => {
        e.preventDefault();


        let userData = { uesername, ueserage }


        console.log(userData)
    }





    return (
        <div>
            <form onSubmit={(e) => { submitHandeler(e) }} className='flex flex-col gap-5 px-3 py-2'>
                <input value={uesername} onChange={(e) => { setUesername(e.target.value) }} className='outline-0 border rounded px-2' type="text" placeholder='Enter Your Name ' />
                <input value={ueserage} onChange={(e) => { setUeserage(e.target.value) }} className='outline-0 border rounded px-2' type="number" placeholder='Enter Your Age ' />
                <input value='male' checked={gender == "male" ? true : false} onChange={(e) => { setgender(e.target.value) }} type="radio" />Male
                <input value='female' checked={gender == "female" ? true : false} onChange={(e) => { setgender(e.target.value) }} type="radio" />Female
                <button className='bg-amber-300 rounded text-xl active:scale-90 transition-all'>Submit</button>
            </form>
        </div>
    )
}

export default Create