import { IAccuWeatherOneDay, IOpenWeatherOneDayItem } from '@interfaces/index'
import { useAppSelector } from '@hooks/redux.hooks'
import { APIs } from '@constants/api'
import { getDayNameFromString } from '@utils/time'
import { Icon, IconOpenWeather, TemperatureValueBig } from '@components/styled'
import { Item, DayName } from './styled'

export const ForecastItem = (day: unknown) => {
  const { curAPI } = useAppSelector((state) => state.location)

  const date =
    curAPI === APIs.ACCUWEATHER
      ? ((day as IAccuWeatherOneDay).Date as string)
      : ((day as IOpenWeatherOneDayItem).dt as number)
  const icon =
    curAPI === APIs.ACCUWEATHER
      ? (day as IAccuWeatherOneDay).Day.Icon
      : (day as IOpenWeatherOneDayItem).weather[0].icon
  const temp =
    curAPI === APIs.ACCUWEATHER
      ? (day as IAccuWeatherOneDay).Temperature.Maximum.Value
      : (day as IOpenWeatherOneDayItem).temp.day

  return (
    <Item>
      <DayName>{getDayNameFromString(date)}</DayName>
      {curAPI === APIs.ACCUWEATHER ? (
        <Icon iconNumber={icon} />
      ) : (
        <IconOpenWeather iconNumber={icon} />
      )}
      <TemperatureValueBig> {Math.round(temp)}°</TemperatureValueBig>
    </Item>
  )
}
