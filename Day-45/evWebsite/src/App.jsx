import { useEffect, useState } from 'react'
import './components/Hero/hero.css'
import BackGround from './components/Background/BackGround';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';

const App = () => {
  let heroData = [
    { text1: "Drive into", text2: "What you Love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ]

  const [heroCount, setHeroCount] = useState(2);

  const [playStatus, setPlayStatus] = useState(false);


  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    },3000)
  },[])

  return (
    <div>
      <BackGround playStatus={playStatus} heroCount={heroCount} />
      <NavBar />
      <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} />
    </div>
  )
}

export default App