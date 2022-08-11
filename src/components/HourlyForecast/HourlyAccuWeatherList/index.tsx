import { getHourFromString } from '@utils/time'
import { HourItem, TemperatureValue, IconSmall } from '@components/styled'
import { HourlyAccuWeatherProps } from './types'
import { RestrictedContainer } from '../styled'

export const HourlyAccuWeatherRender = ({ list }: HourlyAccuWeatherProps) => (
  <RestrictedContainer>
    {list.map(({ DateTime: time, WeatherIcon, Temperature }) => (
      <HourItem key={time}>
        <div>{getHourFromString(time)}</div>
        <IconSmall iconNumber={WeatherIcon} />
        <TemperatureValue>{Math.round(Temperature.Value).toString()}&deg;</TemperatureValue>
      </HourItem>
    ))}
  </RestrictedContainer>
)
