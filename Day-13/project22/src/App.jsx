import React from 'react'
import Nav from './components/Nav';
import MovieCard from './components/MovieCard';

const App = () => {
  const data = [
    {
      id: 1,
      title: "Inception",
      image: "https://good-hope.in/cdn/shop/files/Inception_Poster_Frame.png?v=1745131420&width=1100",
      description: "A thief enters dreams to steal secrets but faces his own subconscious traps.",
      rating: 6.9
    },
    {
      id: 2,
      title: "Interstellar",
      image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      description: "A team travels through a wormhole to find a new home for humanity.",
      rating: 8.6
    },
    {
      id: 3,
      title: "The Dark Knight",
      image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      description: "Batman faces the Joker, a criminal mastermind causing chaos in Gotham.",
      rating: 9.0
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      description: "The Avengers assemble for one final stand against Thanos.",
      rating: 8.4
    },
    {
      id: 5,
      title: "Titanic",
      image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      description: "A love story unfolds aboard the doomed RMS Titanic.",
      rating: 7.8
    },
    {
      id: 6,
      title: "The Matrix",
      image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      description: "A hacker discovers reality is a simulation and becomes 'The One'.",
      rating: 8.7
    },
    {
      id: 7,
      title: "Joker",
      image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      description: "A struggling comedian transforms into Gotham’s most feared criminal.",
      rating: 6.5
    },
    {
      id: 8,
      title: "Avatar",
      image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
      description: "A marine on an alien planet finds himself torn between two worlds.",
      rating: 7.9
    },
    {
      id: 9,
      title: "The Lion King",
      image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      description: "A young lion prince flees after tragedy and returns to reclaim his throne.",
      rating: 8.5
    },
    {
      id: 10,
      title: "Black Panther",
      image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      description: "T’Challa returns to Wakanda to take his place as king and hero.",
      rating: 7.3
    },
    {
      id: 11,
      title: "Spider-Man: No Way Home",
      image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      description: "Spider-Man faces villains from other universes after his identity is revealed.",
      rating: 8.3
    },
    {
      id: 12,
      title: "Doctor Strange",
      image: "https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
      description: "A surgeon turns sorcerer to protect the world from magical threats.",
      rating: 7.5
    },
    {
      id: 13,
      title: "The Shawshank Redemption",
      image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      description: "Two imprisoned men bond over years, finding redemption in friendship.",
      rating: 9.3
    },
    {
      id: 14,
      title: "Forrest Gump",
      image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      description: "The story of an extraordinary man who lived through key moments in history.",
      rating: 4.5
    },
    {
      id: 15,
      title: "Gladiator",
      image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      description: "A betrayed general seeks revenge through the power of the arena.",
      rating: 8.5
    },
    {
      id: 16,
      title: "Dune",
      image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      description: "A young nobleman becomes the chosen one to lead his people on a desert planet.",
      rating: 5
    },
    {
      id: 17,
      title: "The Godfather",
      image: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      description: "The powerful story of the Corleone crime family in America.",
      rating: 9.2
    },
    {
      id: 18,
      title: "The Avengers",
      image: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      description: "Earth’s mightiest heroes unite to face a global alien threat.",
      rating: 7.5
    },
    {
      id: 19,
      title: "Frozen II",
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      description: "Elsa sets out to discover the truth about her magical powers.",
      rating: 7.2
    },
    {
      id: 20,
      title: "Oppenheimer",
      image: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
      rating: 8.9
    }
  ];


  const renderData = data.map((movie)=>{
    return <MovieCard key={movie.id} movie={movie}/>
  })




  return (
    <div className='w-full p-5 bg-[#121212] text-white'>
      <Nav />

      <div className=' px-2 py-3 mt-10 flex flex-col'>
        <h1 className='text-4xl text-center font-bold'>Featured Movies</h1>

        <div className=' flex justify-center items-center gap-5 py-3 flex-wrap mt-3'>

            {renderData}

        </div>
      </div>
    </div>

  )
}

export default App