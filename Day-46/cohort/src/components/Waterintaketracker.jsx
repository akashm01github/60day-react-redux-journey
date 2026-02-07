import React, { useState } from 'react';
import './WaterIntakeTracker.css';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti'

const WaterIntakeTracker = () => {


    const [count, setCount] = useState(0);

    const [showConfetti, setShowConfetti] = useState(false)

    // INCREMENT 

    const waterIntakeIncr = () => {
        if(count >=10) return;

        setCount((prev)=>{
            const newCount = prev+1;

            if(newCount===10){
                setShowConfetti(true);
                toast.success("Todays WaterIntake Goal Completed")
            }

            return newCount
        })


    }


    // DECREMENT
    const waterIntakeDecre = () => {
        if (count == 0) {
            console.log("Not Possible")
            setCount(0)
        }
        else {
            setCount(count - 1)
        }
    }


    const resetWaterIntake = () => {
        setCount(0)
        setShowConfetti(false)
    }



    return (
        <div className="water-tracker">
            <h1 className="title">Daily H<sub>2</sub>O  Intake</h1>

            {/* CONFETTI */}
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                />
            )}

            <div className="counter-display">
                <span className="counter">{count}</span>
            </div>

            {count == 10 ? (<p className='target-info'>Target is Completed</p>) : <p className="target-info">Target: 10 glasses of Water</p>}


            <div className="controls">
                <button onClick={() => waterIntakeDecre()} className="control-btn minus-btn">
                    <span>−</span>
                </button>

                <button onClick={() => waterIntakeIncr()} className="control-btn add-btn">
                    <span>+</span>
                </button>

                <button onClick={() => resetWaterIntake()} className="control-btn reset-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 4v6h-6M1 20v-6h6" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default WaterIntakeTracker;