import React, { useContext } from 'react'
import { MyMovieContext } from '../context/MovieContext';
import { useNavigate } from 'react-router-dom';

const MyMovies = () => {
  const [myMovies, setmyMovies] = useContext(MyMovieContext);

  const navigate = useNavigate();


  const removeHandeler = (id)=>{
    const filterData = myMovies.filter((m)=>m.id != id);
    setmyMovies(filterData);
    // navigate('/')
  }

  const movieList = myMovies.map((singleMovie)=>{
    return  <div key={singleMovie.id} className="w-[300px] h-[400px] hover:scale-105 transition-all  flex flex-col bg-[#1e1e1e] justify-center items-center gap-2 px-3 rounded pb-3">
      <div className='w-[300px] h-[200px] overflow-hidden rounded '>
        <img className='w-full h-full object-cover object-center' src={singleMovie.image} alt="" />
      </div>
      <div className='flex justify-between mt-2  w-full items-center'>
        <h1 className='text-3xl'>{singleMovie.title}</h1>
        <h2 className={`text-xl  border px-1 rounded ${singleMovie.rating > 7 ? "text-green-500" : "text-red-400"}`}>{singleMovie.rating}</h2>
      </div>

      <p className='text-lg text-gray-400'>{singleMovie.description.slice(0, 50)}...More</p>

       <div className='border bg-[#471c23]  rounded-lg text-[#DC2525] w-fit px-4 py-2 md:px-2 md:py-1 flex  items-center gap-2'>
        <i className="ri-heart-line text-3xl md:text-xl"></i>
        <h2 onClick={() => { removeHandeler(singleMovie.id) }} className='text-xl font-semibold md:text-lg cursor-pointer'>Remove Favourites</h2>
      </div>
    </div>
  })

  return (
   <div className='w-full flex flex-wrap gap-10 justify-center'>
    {movieList.length > 0 ? movieList : <h1 className='mt-10 text-4xl'>No Data Added</h1>}
   </div>
  )
}

export default MyMovies