import { v4 as uuid } from 'uuid'

import { useAppSelector } from '@hooks/redux.hooks'
import { getTimeFromString } from '@utils/time/getTime'

import { IconSmall, TemperatureValue } from '@components/styled'
import { Container, RestrictedContainer, Item, Heading } from './styled'

export const HourlyForecast = () => {
  const { city } = useAppSelector((store) => store.location)
  const { hourly } = useAppSelector((store) => store.weather.accuweather[city])

  return (
    <Container>
      <Heading>Hourly forecast</Heading>
      <RestrictedContainer>
        {hourly &&
          hourly.map(({ DateTime: time, WeatherIcon, Temperature }) => (
            <Item key={uuid()}>
              <div>{getTimeFromString(time)}</div>
              <IconSmall iconNumber={WeatherIcon} />
              <TemperatureValue>{Math.round(Temperature.Value).toString()}&deg;</TemperatureValue>
            </Item>
          ))}
      </RestrictedContainer>
    </Container>
  )
}
