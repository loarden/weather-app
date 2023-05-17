import Detail from "./Details";

function BottomInformation(props) {
  const temp_c = props.temp_c;
  const details = props.details;

  return (
    <div className="flex items-center justify-between sm:justify-around">
      <h1 className="text-6xl sm:text-7xl font-bold drop-shadow-sm">{temp_c}°c</h1>
      <div>
        <Detail 
          detailsName="Feels like"
          detail={details ? details.feelslike_c : null}
        />
        <Detail 
          detailsName="Wind"
          detail={details ? details.wind_kph : null}
        />
        <Detail 
          detailsName="UV"
          detail={details ? details.uv : null}
        />
        <Detail 
          detailsName="Humidity"
          detail={details ? details.humidity : null}
        />
      </div>
    </div>
  )
}

export default BottomInformation;