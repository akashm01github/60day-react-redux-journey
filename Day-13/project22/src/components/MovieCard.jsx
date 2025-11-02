import React from 'react'

const MovieCard = ({movie}) => {
    const {title,image,description,rating} = movie;
  return (
      <div className="w-[300px] h-[400px] hover:scale-105 transition-all  flex flex-col bg-[#1e1e1e] justify-center items-center gap-2 px-3 rounded pb-3">
            <div className='w-[300px] h-[200px] overflow-hidden rounded '>
                <img className='w-full h-full object-cover object-center' src={image} alt="" />
            </div>
            <div className='flex justify-between mt-2  w-full items-center'>
              <h1 className='text-3xl'>{title}</h1>
              <h2 className={`text-xl  border px-1 rounded ${rating > 7 ? "text-green-500" : "text-red-400"}`}>{rating}</h2>
            </div>

            <p className='text-lg text-gray-400'>{description.slice(0,50)}...More</p>

            <div className='border bg-[#471c23]  rounded-lg text-[#DC2525] w-fit px-4 py-2 md:px-2 md:py-1 flex  items-center gap-2'>
              <i className="ri-heart-line text-3xl md:text-xl"></i>
              <h2 className='text-xl font-semibold md:text-lg'>Add to Favourites</h2>
            </div>
          </div>
  )
}

export default MovieCard