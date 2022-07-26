import { takeEvery, call, put, select } from 'redux-saga/effects'

import { getCityAccuWeather, getAccuWeatherCurrentConditions } from '@utils/api/weather'
import {
  setIsLoadingAccuWeather,
  setLoadingIsFinishedWeather,
  setErrorWeather,
} from '@store/reducers/loadingSlice'
import { setCurrentAccuWeather } from '@store/reducers/weatherSlice'
import { setCountry } from '@store/reducers/locationSlice'
import { IAccuWeatherData, IAccuWeatherCurrent } from '@interfaces/index'
import { AccuWeatherWorkerType } from './types'
import { RootState } from '../index'

function* getWeatherFromAccuWeatherWorker(): AccuWeatherWorkerType {
  const city = yield select(({ location }: RootState) => location.city)
  try {
    const result = yield call(getCityAccuWeather, city as string)
    console.log('result: ', result)
    if (result) {
      yield put(setCountry((result as IAccuWeatherData).Country.EnglishName))
      const response = yield call(getAccuWeatherCurrentConditions, (result as IAccuWeatherData).Key)
      yield put(setCurrentAccuWeather(response as IAccuWeatherCurrent))
      yield put(setLoadingIsFinishedWeather())
    } else {
      yield put(setErrorWeather)
    }
  } catch {
    yield put(setErrorWeather)
  }
}

export function* AccuWeatherWatcher() {
  yield takeEvery(setIsLoadingAccuWeather.type, getWeatherFromAccuWeatherWorker)
}
