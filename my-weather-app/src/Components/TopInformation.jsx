function TopInformation(props) {
  const cityName = props.cityName;
  const icon = props.icon

  return (
    <div className="flex items-center justify-around sm:justify-around">
      <h2 className="text-4xl sm:text-5xl font-bold drop-shadow">{cityName}</h2>
      <img className="h-28 w-28 drop-shadow" src={`http://openweathermap.org/img/w/${icon}.png`} alt="icon"/>
    </div>
  )
}

export default TopInformation;