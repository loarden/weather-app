import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function Card (props) {
  const city = props.city;
  const [currentWeather, setCurrentWeather] = useState(null)
  const [hourlyWeathers, setHourlyWeathers] = useState('')

  useEffect(() => {
    console.log(city)
  }, [])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=c270a9f6556304b2106962127d7abdc2`)
    .then( response => response.json())
    .then( data => {
      setCurrentWeather(data)
    })
  }, [city])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=dc1f2803991d7dbb9328390a5400c22d`)
    .then( response => response.json())
    .then( data => {
      setHourlyWeathers(data)
    })
  }, [city])

  useEffect(() => {
    if(hourlyWeathers.length !== 0){
      console.log(hourlyWeathers.list)
    }
  }, [hourlyWeathers])

  return (
    <div className="max-w-xl w-full px-4 sm:px-0">
      <CurrentWeather current={currentWeather !== 0 && currentWeather}/>
      <Forecast weatherList={hourlyWeathers !== 0 && hourlyWeathers.list}/>
    </div>
  )
}

export default Card;