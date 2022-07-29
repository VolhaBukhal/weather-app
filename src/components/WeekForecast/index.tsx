import { v4 as uuid } from 'uuid'
import { useAppSelector } from '@hooks/redux.hooks'

import { ForecastItem } from './ForecastItem'
import { HeadlineInfo, Container, WeekForecastContainer } from './styled'

export const WeekForecast = () => {
  const { city } = useAppSelector((state) => state.location)
  const {
    fiveDays: { Headline, DailyForecasts },
  } = useAppSelector((state) => state.weather.accuweather[city])

  return (
    <WeekForecastContainer>
      <HeadlineInfo>{Headline && Headline.Text} </HeadlineInfo>
      <Container>
        {DailyForecasts && DailyForecasts.map((item) => <ForecastItem key={uuid()} {...item} />)}
      </Container>
    </WeekForecastContainer>
  )
}
