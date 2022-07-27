import { put, takeEvery, call, delay } from 'redux-saga/effects'

import { setLocationFromIP } from '@store/reducers/locationSlice'
import {
  setIsLoadingCity,
  setLoadingIsFinishedCity,
  setErrorCity,
  resetError,
} from '@store/reducers/loadingSlice'

import { fetchInitialLocation } from '@utils/api/location'

import { defaultCity } from '@constants/defaultCity'
import { ILocationData } from '@interfaces/index'

function* getInitialLocationWorker() {
  try {
    const result: ILocationData = yield call(fetchInitialLocation)
    yield put(setLocationFromIP(result))
    yield put(setLoadingIsFinishedCity())
  } catch {
    yield put(setErrorCity())
    yield delay(5000)
    yield put(setLocationFromIP(defaultCity))
    yield put(resetError())
  }
}

export function* initialLocationWatcher() {
  yield takeEvery(setIsLoadingCity.type, getInitialLocationWorker)
}
