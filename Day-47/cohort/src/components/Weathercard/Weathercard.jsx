import React, { useEffect, useState } from 'react';
import './WeatherCard.css';
import axios from "axios";

const WeatherCard = () => {
    const [city, setCity] = useState('');

    const [data, setData] = useState('')

    const [date, setDate] = useState('');

    const [month, setMonth] = useState('')

    const fetchData = async () => {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=9bd71456c13d288bb7cf824cff5b2798&query=${city}
       `)

        setData(response.data)
    }

    console.log(data)



    useEffect(() => {
        const today = new Date().getDate().toString();
        setDate(today)

        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const monthIndex = new Date().getMonth();
        const monthName = months[monthIndex];

        setMonth(monthName)
    }, [])




    return (
        <div className="weather-app">
            <div className="search-container">
                <div className="search-box">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Enter city name (e.g. London)"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="search-input"
                    />
                </div>
                <button onClick={() => fetchData()} className="get-weather-btn">Get Weather</button>
            </div>

            {data ? <div className="weather-card">
                <h2 className="location">{data?.location?.name} {data?.location?.country}</h2>
                <div className="date">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="3" width="12" height="11" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
                        <path d="M11 1.5v3M5 1.5v3M2 7h12" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>

                    <span>Today, {month} {date}</span>
                </div>

                <div className="weather-main">
                    <svg className="sun-icon" width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="25" fill="#3B82F6" />
                        <rect x="57" y="15" width="6" height="15" rx="3" fill="#3B82F6" />
                        <rect x="57" y="90" width="6" height="15" rx="3" fill="#3B82F6" />
                        <rect x="15" y="57" width="6" height="15" rx="3" transform="rotate(-90 15 57)" fill="#3B82F6" />
                        <rect x="90" y="57" width="6" height="15" rx="3" transform="rotate(-90 90 57)" fill="#3B82F6" />
                        <rect x="32" y="28" width="6" height="15" rx="3" transform="rotate(-45 32 28)" fill="#3B82F6" />
                        <rect x="82" y="78" width="6" height="15" rx="3" transform="rotate(-45 82 78)" fill="#3B82F6" />
                        <rect x="92" y="32" width="6" height="15" rx="3" transform="rotate(45 92 32)" fill="#3B82F6" />
                        <rect x="42" y="82" width="6" height="15" rx="3" transform="rotate(45 42 82)" fill="#3B82F6" />
                    </svg>

                    <div className="temperature">
                        <span className="temp-value">{data.current.temperature}</span>
                        <span className="temp-unit">°C</span>
                    </div>

                    <p className="weather-description">Mostly Sunny</p>
                </div>

                <div className="weather-details">
                    <div className="detail-card">
                        <svg className="detail-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 28c-1.5 0-2.5-1-2.5-2.5 0-1 .5-1.8 1.3-2.2.3-.2.7-.3.7-.8 0-.8-.5-1.5-1.3-1.8-2-.8-3.2-2.7-3.2-4.7 0-2.8 2.2-5 5-5s5 2.2 5 5c0 2-1.2 3.8-3.2 4.7-.8.3-1.3 1-1.3 1.8 0 .5.3.6.7.8.8.4 1.3 1.2 1.3 2.2 0 1.5-1 2.5-2.5 2.5z" fill="#3B82F6" />
                        </svg>
                        <p className="detail-label">HUMIDITY</p>
                        <p className="detail-value">{data.current.humidity}%</p>
                    </div>

                    <div className="detail-card">
                        <svg className="detail-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M12 8h8M8 16h16M12 24h8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                            <path d="M20 12l4 4-4 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="detail-label">WIND</p>
                        <p className="detail-value">{data.current.wind_speed} km/h</p>
                    </div>

                    <div className="detail-card">
                        <svg className="detail-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 8v8l4 4" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="16" cy="16" r="10" stroke="#3B82F6" strokeWidth="2" />
                        </svg>
                        <p className="detail-label">FEELS LIKE</p>
                        <p className="detail-value">{data.current.feelslike}°C</p>
                    </div>
                </div>
            </div> : <></>}
        </div>
    );
};

export default WeatherCard;