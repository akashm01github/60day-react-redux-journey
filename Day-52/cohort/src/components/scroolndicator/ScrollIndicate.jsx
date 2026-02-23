import { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

const ScrollIndicate = ({ url }) => {
    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(false);

    const [scrollPercentage, setscrollPercentage] = useState(0);



    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            const { data } = await axios.get(getUrl);

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false)
            }

        } catch (error) {
            console.log(`Error: `, error)
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [])


    const handleScrollPercentage = () => {
        // console.log([document.body.scrollTop, document.documentElement.scrollTop,
        // document.documentElement.scrollHeight, document.documentElement.clientHeight])


        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setscrollPercentage((howMuchScrolled / height) * 100)
    }





    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])


    console.log(scrollPercentage)

    return (
        <div>
            <div className='top_container'>
                <h1>Castom Scroll Indicator</h1>

                <div className='scroll_progressContainer'>
                    <div className='scroll_progressBar' style={{ width: `${scrollPercentage}%` }}></div>
                </div>
                
            </div>

            <div className='container'>
                {data && data.length > 0 ?
                    data.map((product) => {
                        return <p key={product.id}>{product.title}</p>
                    })
                    : null}
            </div>
        </div>
    )
}

export default ScrollIndicate