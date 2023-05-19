import { useEffect } from "react";
import { kelvinToCelsius } from "../Controllers/unitExchange";

function Forecast(props){
  const weatherList = props.weatherList

  useEffect(() => {
    console.log(weatherList)
  },[])

  /* const icon = `http://openweathermap.org/img/w/${props.icon}.png`
  const temp = props.temp
  const time = props.time */

  return (
    <>
      {weatherList && weatherList.map((weather) => {
        return (
        <>
         <h4>{kelvinToCelsius(weather.main.temp)}</h4>
         <h4>{weather.dt_txt}</h4>
         <img src={`http://openweathermap.org/img/w/${weather.weather.icon}.png`} alt="icon" />
        </>
        )
      })}
    </>
  )
}

export default Forecast;