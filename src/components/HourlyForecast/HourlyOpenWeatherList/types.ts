import { IOpenWeatherOneHourItem, IWeatherData } from '@interfaces/index'

export interface HourlyOpenWeatherProps {
  list: IOpenWeatherOneHourItem[]
  weather: IWeatherData
  city: string
}
