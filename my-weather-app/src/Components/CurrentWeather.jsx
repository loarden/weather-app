import BottomInformation from "./BottomInformation";
import TopInformation from "./TopInformation";

function CurrentWeather (props) {
  const current = props.current;

  return (
    <div className="flex flex-col gap-4 mt-4 w-full text-white p-4 sm:p-6 backdrop-blur-sm shadow bg-emerald-300/25">
      <TopInformation 
        cityName={current ? current.name : null}
        icon={current ? current.weather[0].icon : null}
      />
      <BottomInformation 
        temp_c={current ? current.main.temp : null}
        details={current ? current : null}
      />
    </div>
  )
}

export default CurrentWeather;