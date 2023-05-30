import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Loading from "./Loading";
import NotFound from "./NotFound";

function Card({city, apiKey}) {
  const [currentWeather, setCurrentWeather] = useState('')
  const [hourlyWeathers, setHourlyWeathers] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError(false)
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        setError(true)
      })
      .then(data => {
        setCurrentWeather(data)
        setLoading(false)
      })

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
        setError(true)
      })
      .then(data => {
        setHourlyWeathers(data)
      })
  }, [city])

  if (error) {
    return (
      <>
        <NotFound />
      </>
    )
  }

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