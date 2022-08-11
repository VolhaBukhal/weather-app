import { useAppSelector } from '@hooks/redux.hooks'
import { APIs } from '@constants/api'
import { getLocalTimeOpenWeather } from '@utils/time'
import { TemperatureValue } from '@components/styled'
import { getWeatherFieldsFromApi } from './helpers'
import { WeatherDescription } from './styled'

export const CurrentWeather = () => {
  const { weather } = useAppSelector((state) => state)
  const { city, curAPI, defaultLocation } = useAppSelector((state) => state.location)
  const { temp, humidity, wind, descr } = getWeatherFieldsFromApi(curAPI, weather, city)

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
