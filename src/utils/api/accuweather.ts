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
  const query = `?apikey=${ACCUWEATHER_KEY}&q=${city}`

  const response = await fetch(`${baseURL}${query}`, { headers })
  const data: IAccuWeatherData[] = await response.json()
  return data[0]
}

export const getAccuWeatherCurrentConditions = async (
  cityId: string
): Promise<IAccuWeatherCurrent | Error> => {
  const baseURL = ACCUWEATHER_URL_CURRENT_CONDITION
  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&details=true`

  try {
    const response = await fetch(`${baseURL}${query}`, { headers })
    if (!response.ok) {
      throw Error('Error happened')
    }

    const data: IAccuWeatherCurrent[] = await response.json()
    return data[0]
  } catch (e) {
    console.log(e)
    return new Error(`Numbers amounts are ended ${e}`)
  }
}

export const getAccuWeatherFiveDays = async (cityId: string): Promise<IAccuWeatherFiveDays> => {
  const baseURL = ACCUWEATHER_URL_FIVE_DAY

  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&details=false&metric=true`

  const response = await fetch(`${baseURL}${query}`, { headers })

  const data: IAccuWeatherFiveDays = await response.json()
  return data
}

export const getAccuWeatherHourly = async (cityId: string): Promise<IAccuWeatherOneHour[]> => {
  const baseURL = ACCUWEATHER_URL_HOURLY

  const query = `${cityId}?apikey=${ACCUWEATHER_KEY}&metric=true`

  const response = await fetch(`${baseURL}${query}`, { headers })

  const data: IAccuWeatherOneHour[] = await response.json()
  return data
}
