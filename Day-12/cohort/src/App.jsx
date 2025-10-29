import React, { useCallback, useMemo, useRef, useState } from 'react'
import Recipe from './Recipe';
import styled from 'styled-components'

// const MyH1 = styled.h1`font-size: 1.5em;
//   text-align: center;
//   color: white;
//   padding: 10px;
//   background-color: ${(props)=>props.bg}


const MyH1= styled.h1({
  color:'pink',
  fontSize:"40px",
  backgroundColor: "red",
})


const App = () => {

  const inputRef = useRef();


  

  const WatchHandeler  = ()=>{
    console.log(inputRef.current.value)
    if(inputRef.current.value.length < 4){
      inputRef.current.style.borderBottom = '2px solid tomato';
    }else{
      inputRef.current.styled.borderBottom = '2px solid blue';
    }
  }


  


  return (
    <div className='bg-[#EEEEEE] flex flex-col gap-2 items-center h-screen w-screen py-10 px-[10%]'>

      <MyH1 bg="tomato">Let's Learn UseRef</MyH1>



      <input ref={inputRef} type="text" className='border p-2 rounded outline-0' placeholder='Enter Something.... ' />
      <button onClick={WatchHandeler} className='border px-2 py-1'>Submit</button>
    </div>
  )
}

export default App