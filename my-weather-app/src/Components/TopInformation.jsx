function TopInformation(props) {
  const cityName = props.cityName;
  const icon = props.icon;

  return (
    <div className="flex items-center justify-between sm:justify-around">
      <h2 className="text-3xl sm:text-4xl font-bold drop-shadow">{cityName}</h2>
      <img className="h-28 w-28 drop-shadow" src={icon} alt="icon"/>
    </div>
  )
}

export default TopInformation;