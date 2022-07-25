import { CityInfo } from '@components/CityInfo'
import { WeatherToday } from '@components/WeatherToday'
import { DisplayContainer, DisplayItem, DisplayItemColumn } from './styled'

export const Display = () => (
  <DisplayContainer>
    <DisplayItem>
      <DisplayItemColumn>
        <div>Clock</div>
        <div>Calender</div>
      </DisplayItemColumn>
      <CityInfo />
    </DisplayItem>
    <DisplayItem>
      <div>
        Weather today
        <WeatherToday />
      </div>
      <div>Forecast week</div>
    </DisplayItem>
  </DisplayContainer>
)
