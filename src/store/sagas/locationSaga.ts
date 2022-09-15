import { put, call, takeEvery, delay } from 'redux-saga/effects'
import { setLocationFromIP, setDefaultLocation } from '@store/reducers/locationSlice'
import {
  setIsLoadingCity,
  setLoadingIsFinishedCity,
  setErrorCity,
  resetError,
} from '@store/reducers/loadingSlice'
import { fetchInitialLocation } from '@utils/api/location'
import { ILocationData } from '@interfaces/index'

function* getInitialLocationWorker() {
  try {
    const result: ILocationData = yield call(fetchInitialLocation)
    if (result) {
      yield put(setLocationFromIP(result))
      yield put(setLoadingIsFinishedCity())
    }
  } catch {
    yield put(setErrorCity())
    yield delay(2000)
    yield put(setDefaultLocation())
    yield put(resetError())
  }
}

export function* initialLocationWatcher() {
  yield takeEvery(setIsLoadingCity.type, getInitialLocationWorker)
}
