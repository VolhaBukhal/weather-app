import {
  OPENWEATHER_KEY,
  OPENWEATHER_URL_ONE_CALL,
  OPENWEATHER_URL_CITY_COORDINATES,
} from '@constants/api'
import { IOpenWeatherCoordinates, IOpenWeatherAll } from '@interfaces/index'

export const getOpenWeatherCoordinates = async (
  cityName: string
): Promise<IOpenWeatherCoordinates | Error> => {
  const baseURL = OPENWEATHER_URL_CITY_COORDINATES
  const query = `?q=${cityName}&limit=1&appid=${OPENWEATHER_KEY}`

  try {
    const response = await fetch(`${baseURL}${query}`)
    if (!response.ok) {
      throw Error('Error happened')
    }

    const data = await response.json()
    return data[0]
  } catch (e) {
    console.log(e)
    return new Error(`There is no such city`)
  }
}

export const getOpenWeatherOneCall = async (
  lat: number,
  lon: number
): Promise<IOpenWeatherAll | Error> => {
  const baseURL = OPENWEATHER_URL_ONE_CALL
  const query = `?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${OPENWEATHER_KEY}`

  try {
    const response = await fetch(`${baseURL}${query}`)
    if (!response.ok) {
      throw Error('Error happened')
    }
    const data: IOpenWeatherAll = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return new Error(`Numbers amounts are ended ${e}`)
  }
}
