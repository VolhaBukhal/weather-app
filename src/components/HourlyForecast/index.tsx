import { v4 as uuid } from 'uuid'
import { useAppSelector } from '@hooks/redux.hooks'
import { getHourFromString, getLocalHourForHourlyForecastOpenWeather } from '@utils/time'
import { APIs } from '@constants/api'
import { IconSmall, TemperatureValue, IconSmallOpenWeather } from '@components/styled'
import { Container, RestrictedContainer, Item, Heading } from './styled'

export const HourlyForecast = () => {
  const { city, curAPI } = useAppSelector((store) => store.location)
  const { weather } = useAppSelector((store) => store)
  const hourlyAccuWeather = curAPI === APIs.ACCUWEATHER && weather.accuweather[city].hourly
  const hourlyOpenWeather = curAPI === APIs.OPENWEATHER && weather.openweather[city].hourly

  const hourlyAccuWeatherRender =
    hourlyAccuWeather &&
    hourlyAccuWeather.map(({ DateTime: time, WeatherIcon, Temperature }) => (
      <Item key={uuid()}>
        <div>{getHourFromString(time)}</div>
        <IconSmall iconNumber={WeatherIcon} />
        <TemperatureValue>{Math.round(Temperature.Value).toString()}&deg;</TemperatureValue>
      </Item>
    ))

  const hourlyOpenWeatherRender =
    hourlyOpenWeather &&
    hourlyOpenWeather.slice(0, 24).map(({ dt: time, temp, weather: weatherHour }) => (
      <Item key={uuid()}>
        <div>
          {getLocalHourForHourlyForecastOpenWeather(
            time,
            weather.openweather[city].timezone_offset
          )}
        </div>
        <IconSmallOpenWeather iconNumber={weatherHour[0].icon} />
        <TemperatureValue>{Math.round(temp).toString()}&deg;</TemperatureValue>
      </Item>
    ))

  return (
    <Container>
      <Heading>Hourly forecast</Heading>
      <RestrictedContainer>
        {curAPI === APIs.ACCUWEATHER ? hourlyAccuWeatherRender : hourlyOpenWeatherRender}
      </RestrictedContainer>
    </Container>
  )
}
