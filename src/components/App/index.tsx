import { useState, useEffect } from 'react'
import { useAppSelector } from '@hooks/redux.hooks'

import { Display } from '@components/Display'
import { Container } from './styled'

export const App = () => {
  const [icon, setIcon] = useState(2)
  const { city } = useAppSelector((state) => state.location)
  const { weather } = useAppSelector((state) => state)

  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger
    if (city && weather.accuweather[city]) {
      console.log('weather: ', weather.accuweather[city].current.WeatherIcon)
      setIcon(weather.accuweather[city].current.WeatherIcon)
    }
  }, [city, icon, weather.accuweather])
  // const { WeatherIcon } = useAppSelector((state) => state.weather.accuweather[city].current)

  return (
    <Container iconNumber={icon}>
      <Display />
    </Container>
  )
}
