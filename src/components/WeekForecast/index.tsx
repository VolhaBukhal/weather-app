import { v4 as uuid } from 'uuid'

import { useAppSelector } from '@hooks/redux.hooks'
import { APIs } from '@constants/api'
import { IAccuWeatherOneDay, IOpenWeatherOneDayItem } from '@interfaces/index'

import { ForecastItem } from './ForecastItem'
import {
  HeadlineInfo,
  HeadlineLogo,
  HeadlineItem,
  Container,
  WeekForecastContainer,
} from './styled'

export const WeekForecast = () => {
  const { city, curAPI } = useAppSelector((state) => state.location)
  const { weather } = useAppSelector((state) => state)

  const DailyForecasts =
    curAPI === APIs.ACCUWEATHER
      ? weather.accuweather[city].daily.DailyForecasts
      : weather.openweather[city].daily

  return (
    <WeekForecastContainer>
      <HeadlineItem>
        <HeadlineLogo currentApi={curAPI} />
        <HeadlineInfo>
          {curAPI === APIs.ACCUWEATHER ? (
            weather.accuweather[city].daily.Headline.Text
          ) : (
            <>Week forecast</>
          )}
        </HeadlineInfo>
      </HeadlineItem>

      <Container>
        {DailyForecasts &&
          DailyForecasts.slice(0, 5).map((item: IAccuWeatherOneDay | IOpenWeatherOneDayItem) => (
            <ForecastItem key={uuid()} {...item} />
          ))}
      </Container>
    </WeekForecastContainer>
  )
}
