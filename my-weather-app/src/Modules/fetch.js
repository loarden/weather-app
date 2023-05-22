export const getWeather = async (apiCall, apiKey, city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/${apiCall}?q=${city}&appid=${apiKey}`)
  const data = await response.json()
  return data
}