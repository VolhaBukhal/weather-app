import { getLocalHourForHourlyForecastOpenWeather } from '@utils/time'
import { HourItem, TemperatureValue, IconSmallOpenWeather } from '@components/styled'
import { RestrictedContainer } from '../styled'
import { HourlyOpenWeatherProps } from './types'

export const HourlyOpenWeatherRender = ({ list, weather, city }: HourlyOpenWeatherProps) => (
  <RestrictedContainer>
    {list.slice(0, 24).map(({ dt, temp, weather: weatherHour }) => (
      <HourItem key={dt}>
        <div>
          {getLocalHourForHourlyForecastOpenWeather(dt, weather.openweather[city].timezone_offset)}
        </div>
        <IconSmallOpenWeather iconNumber={weatherHour[0].icon} />
        <TemperatureValue>{Math.round(temp).toString()}&deg;</TemperatureValue>
      </HourItem>
    ))}
  </RestrictedContainer>
)
