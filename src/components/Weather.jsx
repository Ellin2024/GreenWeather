import React, { useEffect, useRef, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search_icon.png'
import clear_icon from '../assets/clear.png'
import cloudy_icon from '../assets/cloudy.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import windy_icon from '../assets/windy.png'
import humidity_icon from '../assets/humidity.png'
import drizzle_icon from '../assets/drizzle.png'
const Weather = () => {
  const [icon, setIcon] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [location, setLocation] = useState(null);
  const inputRef = useRef()

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloudy_icon,
    "02n": cloudy_icon,
    "03d": cloudy_icon,
    "03n": cloudy_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }

  const search = async (city) => {
    if (city === "") {
      alert("Please enter your region")
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"4cc316148c1f5bb68fd4b3edd14a1b00"}`
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      console.log(data.main.humidity)
      setIcon(icon)
      setHumidity(data.main.humidity)
      setWindSpeed(data.wind.speed)
      setLocation(data.name)
      setTemperature(Math.floor(data.main.temp))
    } catch (error) {

    }
  }

  useEffect(() => {
    search("Yangon")
  }, [])
  return (
    <div>
      <h1 style={{textAlign: "center", fontFamily:"cursive", color: "white", marginTop: "50px"}}>Welcome To GreenWeather</h1>
      <div className='weather'>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder='Search' />
          <img src={search_icon} alt="" onClick={() => search(inputRef.current.value)} />
        </div>
        <img src={icon} alt="" className='weather-icon' />
        <p className='temperature'>{temperature}°C</p>
        <p className='location'>{location}</p>
        <div className='weather-data'>
          <div className="col">
            <img src={humidity_icon} alt="" />
            <div>
              <p>{humidity} %</p>
              <span>Humidity</span>
            </div>
          </div>
          <div className="col">
            <img style={{ width: '40px', height: '35px' }} src={windy_icon} alt="" />
            <div>
              <p>{windSpeed} Km/h</p>
              <span>Wind Speed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather

// style={{width: '30px' , height: '30px'}}
