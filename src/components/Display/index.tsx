import { RequireLoading } from '@hoc/RequireLoading'
import { CityInfo } from '@components/CityInfo'
import { WeekForecast } from '@components/WeekForecast'
import { HourlyForecast } from '@components/HourlyForecast'
import { Clock } from '@components/Clock'
import { AuthCalendar } from '@components/AuthCalendar'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { DisplayContainer, DisplayTopItem, DisplayItemColumn, DisplayItemShadowed } from './styled'

export const Display = () => (
  <DisplayContainer>
    <DisplayTopItem>
      <DisplayItemColumn>
        <Clock />
        <AuthCalendar />
      </DisplayItemColumn>
      <ErrorBoundary>
        <CityInfo />
      </ErrorBoundary>
    </DisplayTopItem>

    <DisplayItemShadowed>
      <RequireLoading>
        <ErrorBoundary>
          <HourlyForecast />
        </ErrorBoundary>
      </RequireLoading>
      <RequireLoading>
        <ErrorBoundary>
          <WeekForecast />
        </ErrorBoundary>
      </RequireLoading>
    </DisplayItemShadowed>
  </DisplayContainer>
)
