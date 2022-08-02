import {
  takeEvery,
  call,
  put,
  select,
  delay,
  CallEffect,
  SelectEffect,
  PutEffect,
} from 'redux-saga/effects'

import {
  getCityAccuWeather,
  getAccuWeatherCurrentConditions,
  getAccuWeatherFiveDays,
  getAccuWeatherHourly,
} from '@utils/api/accuweather'

import { getOpenWeatherCoordinates, getOpenWeatherOneCall } from '@utils/api/openweather'

import {
  setIsLoadingAccuWeather,
  setErrorWeather,
  setErrorCity,
  resetError,
  setLoadingIsFinishedWeather,
} from '@store/reducers/loadingSlice'
import { setDefaultLocation, setCountry, setCurrentIcon } from '@store/reducers/locationSlice'
import { setAccuWeather, setOpenWeather } from '@store/reducers/weatherSlice'

import {
  IAccuWeatherData,
  IAccuWeatherCity,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
  IOpenWeatherAll,
  IWeatherData,
  IOpenWeatherCoordinates,
  IWeatherDataKeys,
} from '@interfaces/index'
import { APIs } from '@constants/api'
import { AccuWeatherWorkerType, OpenWeatherWorkerType } from './types'
import { RootState } from '../index'

function* getWeatherFromAccuWeatherWorker(city: string): AccuWeatherWorkerType {
  try {
    const result = yield call(getCityAccuWeather, city)

    if (result) {
      yield put(setCountry((result as IAccuWeatherData).Country.EnglishName))

      const cityKey = (result as IAccuWeatherData).Key

      const responseCurrent = yield call(getAccuWeatherCurrentConditions, cityKey)
      const responseHourly = yield call(getAccuWeatherHourly, cityKey)
      const responseFiveDays = yield call(getAccuWeatherFiveDays, cityKey)

      const weatherCity: IAccuWeatherCity = {
        current: responseCurrent as IAccuWeatherCurrent,
        hourly: responseHourly as IAccuWeatherOneHour[],
        daily: responseFiveDays as IAccuWeatherFiveDays,
        country: (result as IAccuWeatherData).Country.EnglishName,
      }
      yield put(
        setAccuWeather({
          city: city as string,
          weather: weatherCity,
        })
      )
      yield put(setCurrentIcon((responseCurrent as IAccuWeatherCurrent).WeatherIcon))
      yield put(setLoadingIsFinishedWeather())
    } else {
      yield put(setErrorCity())
      yield delay(2000)
      yield put(setDefaultLocation())
      yield put(resetError())
    }
  } catch {
    yield put(setErrorWeather())
  }
}

function* getWeatherFromOpenWeatherWorker(cityName: string): OpenWeatherWorkerType {
  try {
    const responseCoordinates = yield call(getOpenWeatherCoordinates, cityName)
    const coordinates = responseCoordinates as IOpenWeatherCoordinates

    if (coordinates.lon) {
      yield put(setCountry(coordinates.country))
      const responseOpenWeather = yield call(
        getOpenWeatherOneCall,
        coordinates.lat,
        coordinates.lon
      )

      const weatherCity = {
        ...(responseOpenWeather as IOpenWeatherAll),
        country: (responseCoordinates as IOpenWeatherCoordinates).country,
      }

      yield put(
        setOpenWeather({
          city: cityName,
          weather: weatherCity,
        })
      )
      yield put(setCurrentIcon((responseOpenWeather as IOpenWeatherAll).current.weather[0].icon))
      yield put(setLoadingIsFinishedWeather())
    } else {
      yield put(setErrorCity())
      yield delay(2000)
      yield put(setDefaultLocation())
      yield put(resetError())
    }
  } catch {
    yield put(setErrorWeather())
  }
}

export type ReturnGeWeatherFromAccuWeatherWorkerType = ReturnType<
  typeof getWeatherFromAccuWeatherWorker
>
export type ReturnGeWeatherFromOpenWeatherWorkerType = ReturnType<
  typeof getWeatherFromOpenWeatherWorker
>

function* getWeatherWorker(): Generator<
  CallEffect | SelectEffect | PutEffect,
  void,
  | ReturnGeWeatherFromAccuWeatherWorkerType
  | ReturnGeWeatherFromOpenWeatherWorkerType
  | string
  | IWeatherData
> {
  const curAPI = yield select(({ location }: RootState) => location.curAPI)
  const city = yield select(({ location }: RootState) => location.city)
  const weather = yield select((state: RootState) => state.weather)

  const cityIsExist = (weather as IWeatherData)[curAPI as IWeatherDataKeys][city as string]

  if (cityIsExist) {
    const countryOfExistedCity = cityIsExist.country
    const iconOfExistedCity =
      curAPI === APIs.ACCUWEATHER
        ? (cityIsExist as IAccuWeatherCity).current.WeatherIcon
        : (cityIsExist as IOpenWeatherAll).current.weather[0].icon

    yield put(setLoadingIsFinishedWeather())
    yield put(setCountry(countryOfExistedCity))
    yield put(setCurrentIcon(iconOfExistedCity))
    return
  }

  if (curAPI === APIs.ACCUWEATHER) {
    yield call(getWeatherFromAccuWeatherWorker, city as string)
  } else {
    yield call(getWeatherFromOpenWeatherWorker, city as string)
  }
}

export function* AccuWeatherWatcher() {
  yield takeEvery(setIsLoadingAccuWeather.type, getWeatherWorker)
}
