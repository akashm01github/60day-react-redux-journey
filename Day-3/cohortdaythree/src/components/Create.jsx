import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const Create = ({usersData,setusersData}) => {
    const [uesername, setUesername] = useState('');

    const [ueserage, setUeserage] = useState(0);



    const submitHandeler = (e) => {
        e.preventDefault();


        let newTodo = {
            id:nanoid(),
            uesername
        }


        let finalTodos = [...usersData];

        finalTodos.push(newTodo);
        
        setusersData(finalTodos);

        setUesername('');
    }
    
    

    // console.log(usersData)



    return (
        <div>
            <form onSubmit={(e) => { submitHandeler(e) }} className='flex flex-col gap-5 px-3 py-2'>
                <input value={uesername} onChange={(e) => { setUesername(e.target.value) }} className='outline-0 border rounded px-2' type="text" placeholder='Enter Your Name ' />
                <button className='bg-blue-500 rounded text-xl active:scale-90 transition-all'>Submit</button>
            </form>
        </div>
    )
}

export default Create