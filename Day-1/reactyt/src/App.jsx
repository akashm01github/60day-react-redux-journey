// import React from 'react'
// import Child from './components/Child'

// const App = () => {

//   let users = [
//     {
//       "name": "Akash Mukherjee",
//       "age": 24,
//       "profession": "Web Developer"
//     },
//     {
//       "name": "Jharnna Sen",
//       "age": 22,
//       "profession": "Graphic Designer"
//     },
//     {
//       "name": "Rahul Sharma",
//       "age": 28,
//       "profession": "Software Engineer"
//     },
//     {
//       "name": "Sneha Roy",
//       "age": 25,
//       "profession": "Content Writer"
//     }
//   ]



//   return (
//     <div className='flex flex-wrap gap-4'>
//       {
//         users.map((user, idx) => {
//           return <Child key={idx} users={user} />
//         })
//       }
//     </div>
//   )
// }

// export default App


//! Intregating API

// import React, { useEffect, useState } from 'react';

// import axios from 'axios';

// const App = () => {

//   const [userdata, setUserdata] = useState([]);

//   const getData  = async ()=>{
//     const response = await axios.get(`https://picsum.photos/v2/list`);

//     setUserdata(response.data);

//   }

//   console.log(userdata);

//   useEffect(() => {
//     getData()
//   }, [])


//   return (
//     <div className='p-10'>
//       <button onClick={()=>{getData()}} className='bg-teal-400 px-4 py-1 rounded font-semibold active:scale-80 transition-all'>Load Data</button>
//       <div className=' p-10 mt-5  flex flex-col gap-4 rounded-2xl'>
//             {userdata.map((users,idx)=>{
//                 return <div key={idx} className='rounded bg-[#C2A68C] flex justify-between items-center px-4 py-2'>
//                     <h1 className='text-2xl'>{users.author}</h1>
//                     <img className='w-[200px] h-[150px] rounded' src={users.download_url} alt="" />
//                 </div>
//             })}
//       </div>
//     </div>
//   )
// }

// export default App


// ! React Router DOM

// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Product from './pages/Product'
// import Contact from './pages/Contact'
// import Nav from './components/Nav'

// const App = () => {
//   return (
//     <div>
//       <Nav/>
//       <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/products' element={<Product/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App;


// ! Context API

import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';


const App = () => {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App