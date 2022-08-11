import { APIs } from '@constants/api'
import { IWeatherData } from '@interfaces/index'

export const getWeatherFieldsFromApi = (curAPI: string, weather: IWeatherData, city: string) => {
  const temp =
    curAPI === APIs.ACCUWEATHER
      ? weather.accuweather[city].current.Temperature.Metric.Value
      : weather.openweather[city].current.temp
  const humidity =
    curAPI === APIs.ACCUWEATHER
      ? weather.accuweather[city].current.RelativeHumidity
      : weather.openweather[city].current.humidity
  const wind =
    curAPI === APIs.ACCUWEATHER
      ? weather.accuweather[city].current.Wind.Speed.Metric.Value
      : weather.openweather[city].current.wind_speed

  const descr =
    curAPI === APIs.ACCUWEATHER
      ? weather.accuweather[city].current.WeatherText
      : weather.openweather[city].current.weather[0]?.description

  return {
    temp,
    humidity,
    wind,
    descr,
  }
}
