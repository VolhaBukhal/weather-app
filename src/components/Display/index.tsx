import { RequireLoading } from '@hoc/RequireLoading'

import { CityInfo } from '@components/CityInfo'
import { WeekForecast } from '@components/WeekForecast'
import { HourlyForecast } from '@components/HourlyForecast'
import { Clock } from '@components/Clock'
import { AuthCalendar } from '@components/AuthCalendar'

import { DisplayContainer, DisplayTopItem, DisplayItemColumn, DisplayItemShadowed } from './styled'

export const Display = () => (
  <DisplayContainer>
    <DisplayTopItem>
      <DisplayItemColumn>
        <Clock />
        <AuthCalendar />
      </DisplayItemColumn>
      <CityInfo />
    </DisplayTopItem>

    <DisplayItemShadowed>
      <RequireLoading>
        <HourlyForecast />
      </RequireLoading>
      <RequireLoading>
        <WeekForecast />
      </RequireLoading>
    </DisplayItemShadowed>
  </DisplayContainer>
)
