import { useEffect, useState } from "react"

const useFetchData = () => {
  const [products, setProducts] = useState([]);

  //! FETCH API DATA 
  const fetchData = async(params)=>{
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();

    setProducts(data);
  }

  useEffect(()=>{
    fetchData()
  },[])


  return [products];

}

export default useFetchData