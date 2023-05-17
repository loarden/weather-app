import BottomInformation from "./BottomInformation";
import TopInformation from "./TopInformation";

function CurrentWeather (props) {
  const current = props.current;

  return (
    <div className="flex flex-col gap-4 mt-4 w-full text-white p-4 sm:p-6 backdrop-blur-sm shadow">
      <TopInformation 
        cityName={current ? current.location.name : null}
        icon={current ? current.current.condition.icon : null}
      />
      <BottomInformation 
        temp_c={current ? current.current.temp_c : null}
        details={current ? current.current : null}
      />
    </div>
  )
}

export default CurrentWeather;