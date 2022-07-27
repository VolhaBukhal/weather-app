import { IAccuWeatherOneDay } from '@interfaces/index'

import { getDayNameFromString } from '@utils/time/getDayName'

import { Icon, TemperatureValueBig } from '@components/styled'
import { Item, DayName } from './styled'

export const ForecastItem = ({ Date, Temperature, Day }: IAccuWeatherOneDay) => (
  <Item>
    <DayName>{getDayNameFromString(Date)}</DayName>
    <Icon iconNumber={Day.Icon} />
    <TemperatureValueBig> {Math.round(Temperature.Maximum.Value)} &deg;</TemperatureValueBig>
  </Item>
)
