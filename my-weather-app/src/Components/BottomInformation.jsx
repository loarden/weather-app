import { kelvinToCelsius, speedUnitExchange } from "../Modules/unitExchange";
import Detail from "./Details";

function BottomInformation({temp_c, details}) {
  return (
    <div className="flex items-center justify-around sm:justify-around">
      <h1 className="text-5xl sm:text-6xl font-bold drop-shadow-sm">
        {kelvinToCelsius(temp_c, 1)}
      </h1>
      <div>
        <Detail
          detailsName="Feels like"
          detail={details ? kelvinToCelsius(details.main.feels_like) : null}
        />
        <Detail
          detailsName="Wind"
          detail={details ? speedUnitExchange(details.wind.speed, 1) : null}
        />
        <Detail
          detailsName="Pressure"
          detail={details ? details.main.pressure : null}
        />
        <Detail
          detailsName="Humidity"
          detail={details ? details.main.humidity : null}
        />
      </div>
    </div>
  )
}

export default BottomInformation;