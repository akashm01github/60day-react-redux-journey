import React, { useEffect, useState } from 'react'

import commaImg from '../../../public/comma.png'

import './QuoteCard.css'


import axios from 'axios'


const QuoteCard = () => {


  const [quote, setSuote] = useState('');


  const fetchQuote = async () => {
    const response = await axios.get('https://motivational-spark-api.vercel.app/api/quotes/random')
    setSuote(response.data)
  }

  useEffect(() => {
    fetchQuote()
  }, [])





  return (
    <div className='container'>
      <div className='card'>
        <img className='commaPng' src={commaImg} alt="" />
        <img className='commaPn2' src={commaImg} alt="" />

        <h2 className='title'>{quote.quote}</h2>
        <h4 className='author'>~ {quote.author}</h4>
      </div>
    </div>
  )
}

export default QuoteCard