import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Loading from "./Loading";

function Card(props) {
  const city = props.city;
  const [currentWeather, setCurrentWeather] = useState('')
  const [hourlyWeathers, setHourlyWeathers] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c270a9f6556304b2106962127d7abdc2`)
      .then(response => response.json())
      .then(data => {
        setCurrentWeather(data)
        setLoading(false)
      })
  }, [city])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dc1f2803991d7dbb9328390a5400c22d`)
      .then(response => response.json())
      .then(data => {
        setHourlyWeathers(data)
      })
  }, [city])

  return (
    <>
      {loading ?
        <div className=" w-full h-96 flex justify-center items-center">
          <Loading />
        </div> :
        <div className="max-w-xl w-full px-4 sm:px-0">
          <h2 className="text-white text-left font-bold text-lg my-2">Current Weather</h2>
          {currentWeather && <CurrentWeather current={currentWeather} />}
          <h2 className="text-white text-left font-bold text-lg my-2">
            24 Hours Forecast
          </h2>
          {hourlyWeathers && hourlyWeathers.list.slice(0, 9).map((weather) => {
            return (
              <Forecast
                key={weather.dt}
                icon={weather.weather[0].icon}
                temp={weather.main.temp}
                time={weather.dt_txt}
              />
            )
          })}
        </div>}
    </>


  )
}

export default Card;