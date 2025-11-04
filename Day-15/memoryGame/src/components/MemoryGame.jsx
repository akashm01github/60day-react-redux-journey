import React, { useState } from 'react'

const MemoryGame = () => {


    const [gridSize, setgridSize] = useState(4);

    const [cards, setcards] = useState([]);

    const [flipped, setFlipped] = useState([]);

    const [solved, setSolved] = useState([]);

    const [disabled, setDisabled] = useState([]);

    const [won, setWon] = useState(false);


    const HandelGridSizeChange = (e)=>{
        const size = parseInt(e.target.value);
        if(size>=2 && size<=10){
            setgridSize(size)
        }
    }

    const initializeGame = ()=>{
        const totalCards = gridSize * gridSize;
        const pairCount = Math.floor(totalCards/2);
    }


  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-[#F4E9D7]'>

        <h1 className='text-3xl font-bold mb-6'>Memory Game</h1>

        {/* Input */}
        <div className='mb-4'>
            <label className='text-lg mr-4' htmlFor="gridSize">Grid Size: (max: 10)</label>
            <input onChange={(e)=>HandelGridSizeChange(e)} type="number" id='gridSize' min="2" max='10'  value={gridSize} className='border-2 border-gray-500 rounded px-2 py-1'/>
        </div>


        {/* Game Board */}


        {/* Result */}


        {/* Reset and Play Again Button */}
    </div>
  )
}

export default MemoryGame