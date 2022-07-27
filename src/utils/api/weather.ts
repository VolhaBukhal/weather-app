import {
  ACCUWEATHER_URL_CITY_SEARCH,
  ACCUWEATHER_KEY,
  ACCUWEATHER_URL_CURRENT_CONDITION,
  ACCUWEATHER_URL_FIVE_DAY,
  ACCUWEATHER_URL_HOURLY,
  headers,
} from '@constants/api'

import {
  IAccuWeatherData,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
} from '@interfaces/index'

export const getCityAccuWeather = async (city: string): Promise<IAccuWeatherData> => {
  const baseURL = ACCUWEATHER_URL_CITY_SEARCH
  //   const query = `?apikey=${ACCUWEATHER_KEY}&q=${city}&language=${LANGUAGE_RU}`
  const query = `?apikey=${ACCUWEATHER_KEY}&q=${city}`

  const response = await fetch(`${baseURL}${query}`, { headers })
  const data: IAccuWeatherData[] = await response.json()
  return data[0]
}

export const getAccuWeatherCurrentConditions = async (
  cityId: string
): Promise<IAccuWeatherCurrent> => {
  const baseURL = ACCUWEATHER_URL_CURRENT_CONDITION
  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&details=true`

  const response = await fetch(`${baseURL}${query}`, { headers })

  const data: IAccuWeatherCurrent[] = await response.json()
  return data[0]
}

export const getAccuWeatherFiveDays = async (cityId: string): Promise<IAccuWeatherFiveDays> => {
  const baseURL = ACCUWEATHER_URL_FIVE_DAY

  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&details=false&metric=true`

  const response = await fetch(`${baseURL}${query}`, { headers })

  const data: IAccuWeatherFiveDays = await response.json()
  return data
}

// http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/308526?apikey=HmFHecUv5pqduwVumvOmETAUc4HNa6J1&metric=true

export const getAccuWeatherHourly = async (cityId: string): Promise<IAccuWeatherOneHour[]> => {
  const baseURL = ACCUWEATHER_URL_HOURLY

  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&metric=true`

  const response = await fetch(`${baseURL}${query}`, { headers })

  const data: IAccuWeatherOneHour[] = await response.json()
  return data
}
