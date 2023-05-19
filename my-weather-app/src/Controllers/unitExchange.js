export function kelvinToCelsius(number, decimal) {
  return Number.parseFloat(number - 273.15).toFixed(decimal) + '°c'
}

export function speedUnitExchange(number, decimal) {
  return Number.parseFloat(number * 3,6).toFixed(decimal) + ' km/h'
}