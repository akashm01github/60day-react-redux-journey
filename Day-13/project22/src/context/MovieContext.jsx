import React, { createContext, useState } from 'react'

export const MyMovieContext = createContext(null);

const MovieContext = ({children}) => {

    const [myMovies, setmyMovies] = useState([]);
  return (
    <MyMovieContext.Provider value={[myMovies, setmyMovies]}>
        {children}
    </MyMovieContext.Provider>
  )
}

export default MovieContext