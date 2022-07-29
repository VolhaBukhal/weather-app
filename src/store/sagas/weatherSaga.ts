import { takeEvery, call, put, select, delay } from 'redux-saga/effects'

import {
  getCityAccuWeather,
  getAccuWeatherCurrentConditions,
  getAccuWeatherFiveDays,
  getAccuWeatherHourly,
} from '@utils/api/weather'
import {
  setIsLoadingAccuWeather,
  // setErrorWeather,
  setErrorCity,
  resetError,
  setLoadingIsFinishedWeather,
} from '@store/reducers/loadingSlice'
import { setDefaultLocation, setCountry } from '@store/reducers/locationSlice'
import {
  setAccuWeather,
  // setFiveDaysAccuWeather,
  // setHourlyAccuWeather,
} from '@store/reducers/weatherSlice'

import {
  IAccuWeatherData,
  IWeatherCity,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
  IWeatherData,
} from '@interfaces/index'
import { AccuWeatherWorkerType } from './types'
import { RootState } from '../index'

function* getWeatherFromAccuWeatherWorker(): AccuWeatherWorkerType {
  const city = yield select(({ location }: RootState) => location.city)
  const weather = yield select((state: RootState) => state.weather)

  const cityIsExist = (weather as IWeatherData).accuweather[city as string]

  if (cityIsExist) {
    console.log('city already exist')
    yield put(setLoadingIsFinishedWeather())
    return
  }

  // check whether exist in store
  try {
    console.log('go further to fetch again')
    const result = yield call(getCityAccuWeather, city as string)
    console.log('result from getCityAccuWeather...', result)
    if (result) {
      yield put(setCountry((result as IAccuWeatherData).Country.EnglishName))
      console.log('will get the weather next...')

      const cityKey = (result as IAccuWeatherData).Key

      // const allWeatherCity = yield all({
      //   current: fork(getAccuWeatherCurrentConditions, cityKey),
      //   hourly: fork(getAccuWeatherHourly, cityKey),
      //   fiveDays: fork(getAccuWeatherFiveDays, cityKey),
      // })
      // console.log('allWeatherCity: ', allWeatherCity as IWeatherCity)

      const responseCurrent = yield call(getAccuWeatherCurrentConditions, cityKey)
      const responseHourly = yield call(getAccuWeatherHourly, cityKey)
      const responseFiveDays = yield call(getAccuWeatherFiveDays, cityKey)

      const weatherCity: IWeatherCity = {
        current: responseCurrent as IAccuWeatherCurrent,
        hourly: responseHourly as IAccuWeatherOneHour[],
        fiveDays: responseFiveDays as IAccuWeatherFiveDays,
      }
      yield put(
        setAccuWeather({
          city: city as string,
          weather: weatherCity,
        })
      )
      yield put(setLoadingIsFinishedWeather())
    } else {
      yield put(setErrorCity())
      yield delay(2000)
      yield put(setDefaultLocation())
      yield put(resetError())
    }
  } catch {
    // yield put(setErrorWeather())
    console.log('error in getting Wather')
  }
}

export function* AccuWeatherWatcher() {
  yield takeEvery(setIsLoadingAccuWeather.type, getWeatherFromAccuWeatherWorker)
}
