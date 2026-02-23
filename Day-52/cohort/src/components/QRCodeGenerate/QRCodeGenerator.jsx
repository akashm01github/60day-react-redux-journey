import React, { useState } from 'react'

import './style.css'

import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {

  const [qrCode, setQrCode] = useState('');

  const [input, setInput] = useState('');

  const handelGenerate = () => {
    setQrCode(input);
  }


  return (
    <div className='container'>
      <h1>QR Code Generator</h1>

      <div className='container_child'>
        <input onChange={(e) => setInput(e.target.value)} type="text" name='qr-code' placeholder='Enter Something...' />
        <button disabled={input && input.trim() !== '' ? false : true} onClick={handelGenerate}>Generate</button>
      </div>
      <div>
        <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#F9DFDF'  color='#EAEFEF' />
      </div>
    </div>
  )
}

export default QRCodeGenerator