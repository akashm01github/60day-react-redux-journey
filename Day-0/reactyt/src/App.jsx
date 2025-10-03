// import React from 'react'

// const App = () => {
//   const user  = "Akash";

//   const changeName = ()=>{
//     user = "Akash Mukherjee";
//   }

// changeName();

//   return (
//     <div>
//       <h1>username is: {user}</h1>
//       <button onClick={()=>{changeName()}}>Chnage User</button>
//     </div>
//   )
// }

// export default App


//! Use state Hook in React JS 

// import React, { useState } from 'react'

// const App = () => {
//   const [a, setA] = useState(10);

//   const changeName = () => {
//     setA(60)
//   }

//   return (
//     <div>
//       <h1>Value of a is {a}</h1>
//       <button onClick={()=>{changeName()}}>Cahange a</button>
//     </div>
//   )
// }

// export default App


//! Counter app Using React JS + Add CSS adn Tailwind 

// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0);

//   const chageNumber = () => {
//     setnum(num + 1);
//   }

//   const decrementNumber = () => {
//     if (num <= 0) {
//       console.log("Not Possible");
//     } else {
//       setnum(num - 1);
//     }

//   }

//   return (
//     <div className='flex flex-col justify-center gap-4 items-center bg-amber-100 py-5'>
//       <h1 className='text-3xl font-bold'>Number is: {num}</h1>
//       <button className='px-4 py-2 font-semibold border-0 rounded-2xl bg-green-500 active:scale-90 transition-all cursor-pointer' onClick={() => { chageNumber() }}>Increment</button>
//       <button className='px-4 py-2 font-semibold border-0 rounded-2xl bg-red-500 text-white active:scale-90 transition-all cursor-pointer' onClick={() => { decrementNumber() }}>Decrement</button>
//     </div>
//   )
// }

// export default App


//! Form Handeling in React JS


// import React, { useState } from 'react'

// const App = () => {
//   const [inputValue, setinputValue] = useState('')
//   const submitHandeler = (e)=>{
//       e.preventDefault();
//       console.log(inputValue);
//       setinputValue('');
//   }
//   let a = 10;
//   return (
//     <div>
//       <form onSubmit={(e)=>{submitHandeler(e)}} className='flex flex-col justify-center items-center px-8 py-4 gap-4'>
//             <input value={inputValue} onChange={(data)=>{setinputValue(data.target.value)}}   type="text" placeholder='Enter Your Name' className='px-4 py-2 border outline-0 rounded-2xl' />
//             <button className='px-5 py-2 font-semibold border-0 rounded-xl bg-red-500 text-white active:scale-90 transition-all cursor-pointer'>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App;


//! Fregments 
// import React from 'react'

// const App = () => {
//   let a = 10;
//   return (
//     <>
//       <h1>Hello : {a}</h1>
//     </>
//   )
// }

// export default App;



//! Components 
// import React from 'react'
// import Nav from './components/Nav'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Nav />
//       <Footer/>
//     </div>
//   )
// }

// export default App 


//! Props Drilling
import React from 'react'
import Card from './components/Card';

const App = () => {
  let users = [
    {
      "name": "Akash Mukherjee",
      "age": 24,
      "profession": "Web Developer",
      "image": "https://example.com/images/akash.jpg"
    },
    {
      "name": "Jharnna Sen",
      "age": 22,
      "profession": "Graphic Designer",
      "image": "https://example.com/images/jharnna.jpg"
    },
    {
      "name": "Rohit Das",
      "age": 28,
      "profession": "Doctor",
      "image": "https://example.com/images/rohit.jpg"
    },
    {
      "name": "Sneha Roy",
      "age": 26,
      "profession": "Teacher",
      "image": "https://example.com/images/sneha.jpg"
    }
  ]

  let data = users.map((elem, idx) => {
    return <Card key={idx} users={elem} />
  })


  return (
    <div className="flex justify-center items-center gap-5">
      {data}
    </div>
  )
}

export default App 