import { kelvinToCelsius } from "../Controllers/unitExchange";

function Forecast(props){
  const time = props.time
  const temp = props.temp
  const icon = props.icon

  return (
    <div className="text-white flex justify-between items-center px-2 my-2 backdrop-blur-sm shadow">
      <p>{time}</p>
      <div className="flex items-center">
        <h4 className="text-lg font-bold">{kelvinToCelsius(temp)}</h4>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} atl={icon}/>
      </div>
    </div>
  )
}

export default Forecast;