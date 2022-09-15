import { useAppSelector } from '@hooks/redux.hooks'
import { APIs } from '@constants/api'
import { HourlyOpenWeatherRender } from './HourlyOpenWeatherList'
import { HourlyAccuWeatherRender } from './HourlyAccuWeatherList'
import { Container, Heading } from './styled'

export const HourlyForecast = () => {
  const { city, curAPI } = useAppSelector((store) => store.location)
  const { weather } = useAppSelector((store) => store)
  const hourlyAccuWeather = curAPI === APIs.ACCUWEATHER && weather.accuweather[city].hourly
  const hourlyOpenWeather = curAPI === APIs.OPENWEATHER && weather.openweather[city].hourly

  return (
    <Container>
      <Heading>Hourly forecast</Heading>
      {curAPI === APIs.ACCUWEATHER
        ? hourlyAccuWeather && <HourlyAccuWeatherRender list={hourlyAccuWeather} />
        : hourlyOpenWeather && (
            <HourlyOpenWeatherRender list={hourlyOpenWeather} city={city} weather={weather} />
          )}
    </Container>
  )
}
