import { kelvinToCelsius } from "../Modules/unitExchange";
import { formatDate } from "../Modules/format";

function Forecast(props) {
  const time = props.time
  const temp = props.temp
  const icon = props.icon

  return (
    <div className="text-white flex justify-between items-center px-4 my-2 backdrop-blur-sm shadow bg-emerald-300/25">
      <p className="font-bold text-lg">{formatDate(time)}</p>
      <div className="flex items-center gap-1">
        <h4 className="text-lg sm:text-xl font-bold">{kelvinToCelsius(temp, 1)}</h4>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon" />
      </div>
    </div>
  )
}

export default Forecast;