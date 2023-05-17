import { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

function Card (props) {
  const city = props.city;
  const [choosenCity, setChoosenCity] = useState('')

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=401ad06e896d476ba2e92559232003&q=${city}`)
    .then( response => response.json())
    .then( data => {
      setChoosenCity(data)
    })
  }, [city])

  useEffect(() => {
    console.log(choosenCity)
  }, [choosenCity])

  return (
    <div className="max-w-xl w-full px-4 sm:px-0">
      <CurrentWeather current={choosenCity}/>
    </div>
  )
}

export default Card;