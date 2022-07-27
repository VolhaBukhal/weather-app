import { takeEvery, call, put, select } from 'redux-saga/effects'

import {
  getCityAccuWeather,
  getAccuWeatherCurrentConditions,
  getAccuWeatherFiveDays,
  getAccuWeatherHourly,
} from '@utils/api/weather'
import {
  setIsLoadingAccuWeather,
  setLoadingIsFinishedWeather,
  setErrorWeather,
} from '@store/reducers/loadingSlice'
import {
  setCurrentAccuWeather,
  setFiveDaysAccuWeather,
  setHourlyAccuWeather,
} from '@store/reducers/weatherSlice'
import { setCountry } from '@store/reducers/locationSlice'
import {
  IAccuWeatherData,
  IAccuWeatherCurrent,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
} from '@interfaces/index'
import { AccuWeatherWorkerType } from './types'
import { RootState } from '../index'

function* getWeatherFromAccuWeatherWorker(): AccuWeatherWorkerType {
  const city = yield select(({ location }: RootState) => location.city)
  try {
    const result = yield call(getCityAccuWeather, city as string)
    if (result) {
      yield put(setCountry((result as IAccuWeatherData).Country.EnglishName))
      const responseCurrent = yield call(
        getAccuWeatherCurrentConditions,
        (result as IAccuWeatherData).Key
      )
      const responseHourly = yield call(getAccuWeatherHourly, (result as IAccuWeatherData).Key)
      const responseFiveDays = yield call(getAccuWeatherFiveDays, (result as IAccuWeatherData).Key)

      yield put(setHourlyAccuWeather(responseHourly as IAccuWeatherOneHour[]))
      yield put(setCurrentAccuWeather(responseCurrent as IAccuWeatherCurrent))
      yield put(setFiveDaysAccuWeather(responseFiveDays as IAccuWeatherFiveDays))
      yield put(setLoadingIsFinishedWeather())
    } else {
      yield put(setErrorWeather())
    }
  } catch {
    yield put(setErrorWeather())
  }
}

export function* AccuWeatherWatcher() {
  yield takeEvery(setIsLoadingAccuWeather.type, getWeatherFromAccuWeatherWorker)
}
