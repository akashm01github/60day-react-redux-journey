import React, { useEffect, useState } from 'react'

const MemoryGame = () => {

    //! States
    const [gridSize, setgridSize] = useState(4);

    const [cards, setcards] = useState([]);

    const [flipped, setFlipped] = useState([]);

    const [solved, setSolved] = useState([]);

    const [disabled, setDisabled] = useState(false);

    const [won, setWon] = useState(false);


    const HandelGridSizeChange = (e) => {
        const size = parseInt(e.target.value);
        if (size >= 2 && size <= 10) {
            setgridSize(size)
        }
    }

    const initializeGame = () => {
        const totalCards = gridSize * gridSize;
        const pairCount = Math.floor(totalCards / 2);

        const numbers = [...Array(pairCount).keys()].map((n) => n + 1);

        const suffeledCards = [...numbers, ...numbers]
            .sort(() => Math.random() - 0.5)
            .slice(0, totalCards)
            .map((number, index) => ({ id: index, number }))


        setcards(suffeledCards);
        setFlipped([]);
        setSolved([]);
        setDisabled(false)
        setWon(false);

    }


    const checkMatch = (secondId) => {
        const [firstId] = flipped;
        if(cards[firstId].number === cards[secondId].number){
            setSolved([...solved,firstId,secondId]);
            setFlipped([]);
            setDisabled(false);
        }
        else{
            setTimeout(() => {
                setFlipped([]);
                setDisabled(false)
            }, 1000);
        }
    }


    const handelClick = (id) => {
        if (disabled || won) {
            return
        };

        if (flipped.length === 0) {
            setFlipped([id]);
            return;
        }


        if (flipped.length === 1) {
            setDisabled(true);
            if (id !== flipped[0]) {
                setFlipped([...flipped, id]);
                // ! Check Match
                checkMatch(id);
            }
            else {
                setFlipped([]);
                setDisabled(false);
            }
        }
    }

    const isFlipped = (id) => flipped.includes(id) || solved.includes(id);

    const isSolved = (id)=>solved.includes(id);


    useEffect(() => {
        initializeGame();
    }, [gridSize])



    useEffect(()=>{
        if(solved.length === cards.length && cards.length > 0){
            setWon(true);
        }

    },[solved,cards])


    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-[#CBCBCB]'>

            <h1 className='text-3xl font-bold mb-6'>Memory Game</h1>

            {/* Input */}
            <div className='mb-4'>
                <label className='text-lg mr-4' htmlFor="gridSize">Grid Size: (max: 10)</label>
                <input onChange={(e) => HandelGridSizeChange(e)} type="number" id='gridSize' min="2" max='10' value={gridSize} className='border-2 border-gray-500 rounded px-2 py-1' />
            </div>


            {/* Game Board */}
            <div
                className={`grid gap-2 mb-4`}
                style={{
                    gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
                    width: `min(100%, ${gridSize * 5.5}rem)`
                }}
            >
                {cards.map((card) => {
                    return <div onClick={() => handelClick(card.id)} key={card.id} className={`aspect-square flex justify-center items-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300  ${isFlipped(card.id) ? isSolved(card.id) ? "bg-green-500 text-black" : "bg-red-500 text-white": "bg-[#334443]"}`}>{isFlipped(card.id) ? card.number : "?"}</div>
                })}
            </div>



            {/* Result */}

            {won && <h1 className='text-3xl mt-10'>You Won 😁</h1>}


            {/* Reset and Play Again Button */}

            <button onClick={initializeGame} className='border text-2xl mt-4 px-10 py-1 rounded active:scale-90 cursor-pointer transition-all'>{won ? "Play Again" : "Reset"}</button>

        </div>
    )
}

export default MemoryGame