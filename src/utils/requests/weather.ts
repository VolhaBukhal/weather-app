import {
  ACCUWEATHER_URL_CITY_SEARCH,
  ACCUWEATHER_KEY,
  ACCUWEATHER_URL_CURRENT_CONDITION,
} from '@constants/api'

import { IAccuWeatherData, IAccuWeatherCurrent } from '@interfaces/index'

// get city info and county + cityKey for weather condition request
export const getCityAccuWeather = async (city: string): Promise<IAccuWeatherData> => {
  const baseURL = ACCUWEATHER_URL_CITY_SEARCH
  //   const query = `?apikey=${ACCUWEATHER_KEY}&q=${city}&language=${LANGUAGE_RU}`
  const query = `?apikey=${ACCUWEATHER_KEY}&q=${city}`

  const response = await fetch(`${baseURL}${query}`)
  const data: IAccuWeatherData[] = await response.json()
  return data[0]
}

//   http://dataservice.accuweather.com/currentconditions/v1/{keyOfCityGetFromSearchRequest}
export const getAccuWeatherCurrentConditions = async (
  cityId: string
): Promise<IAccuWeatherCurrent> => {
  const baseURL = ACCUWEATHER_URL_CURRENT_CONDITION
  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&q=${cityId}`

  const response = await fetch(`${baseURL}${query}`)

  const data: IAccuWeatherCurrent[] = await response.json()
  return data[0]
}
