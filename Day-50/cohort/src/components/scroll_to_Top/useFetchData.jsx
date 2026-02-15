import React, { useEffect, useState } from 'react'

import './useFetchData.css';


import axios from 'axios';

const useFetchData = (url, options = {}) => {

  const [data, setData] = useState(null);

  const [pending, setPending] = useState(false);

  const [error, setError] = useState(null);


  const fetchData = async () => {
    setPending(true)
    try {
      const response = await fetch(url, { ...options });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();

      setData(result)

      setPending(false);

      setError(null);


    } catch (error) {
      setError(`${error}. Some Error Occoured`);
      setPending(false)
    }
  }


  useEffect(() => {
    fetchData()
  }, [url])


  return {data,error,pending}
  
}

export default useFetchData;