import { RequireLoading } from '@hoc/RequireLoading'
import { CityInfo } from '@components/CityInfo'
import { WeekForecast } from '@components/WeekForecast'
import { HourlyForecast } from '@components/HourlyForecast'
import { Clock } from '@components/Clock'
import { AuthCalendar } from '@components/AuthCalendar'
import { ErrorBoundary } from '@components/ErrorBoundary'
import { Wrapper, TopContainer, TimeAndCalendarBlock, BottomContainer } from './styled'

export const Display = () => (
  <Wrapper>
    <TopContainer>
      <TimeAndCalendarBlock>
        <Clock />
        <AuthCalendar />
      </TimeAndCalendarBlock>
      <ErrorBoundary>
        <CityInfo />
      </ErrorBoundary>
    </TopContainer>

    <BottomContainer>
      <ErrorBoundary>
        <RequireLoading>
          <HourlyForecast />
        </RequireLoading>
        <RequireLoading>
          <WeekForecast />
        </RequireLoading>
      </ErrorBoundary>
    </BottomContainer>
  </Wrapper>
)
