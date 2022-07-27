import { v4 as uuid } from 'uuid'
import { useAppSelector } from '@hooks/redux.hooks'

import { ForecastItem } from './ForecastItem'
import { HeadlineInfo, Container, WeekForecastContainer } from './styled'

export const WeekForecast = () => {
  const {
    fiveDays: { Headline, DailyForecasts },
  } = useAppSelector((state) => state.weather.accuweather)

  return (
    <WeekForecastContainer>
      <HeadlineInfo>{Headline.Text} </HeadlineInfo>
      <Container>
        {DailyForecasts.map((item) => (
          <ForecastItem key={uuid()} {...item} />
        ))}
      </Container>
    </WeekForecastContainer>
  )
}
