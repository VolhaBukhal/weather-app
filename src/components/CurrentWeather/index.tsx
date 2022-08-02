import { useAppSelector } from '@hooks/redux.hooks'

import { APIs } from '@constants/api'
import { getLocalTimeOpenWeather } from '@utils/time'

import { TemperatureValue } from '@components/styled'
import { WeatherDescription } from './styled'

export const CurrentWeather = () => {
  const { weather } = useAppSelector((state) => state)
  const { city, curAPI, defaultLocation } = useAppSelector((state) => state.location)

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

  if (!city) {
    return null
  }

  return (
    <>
      {city !== defaultLocation.city && curAPI === APIs.OPENWEATHER && (
        <div>
          <i>City Time: </i>
          {getLocalTimeOpenWeather(weather.openweather[city].timezone_offset)}
        </div>
      )}
      <TemperatureValue>
        {Math.round(temp)}&deg;C
        <WeatherDescription>{descr}</WeatherDescription>
      </TemperatureValue>
      <div>Wind speed {wind} km/h</div>
      <div>Humidity {humidity}%</div>
    </>
  )
}
