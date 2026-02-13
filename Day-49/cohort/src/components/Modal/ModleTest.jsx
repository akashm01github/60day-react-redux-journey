import React, { useState } from 'react'
import Modal from './Modal';
import './Modal.css'

const ModleTest = () => {
    const [showModalPopUp, setShosModalPopUp] = useState(false);

    function handleToggleModalPopup() {
        setShosModalPopUp(!showModalPopUp);
    }

    function onClose() {
        setShosModalPopUp(false)
    }
    return (
        <div className='container'>
            <button onClick={() => handleToggleModalPopup()}><span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Click me
                </span></button>

            {
                showModalPopUp && <Modal onClose={onClose} />
            }
        </div>
    )
}

export default ModleTest