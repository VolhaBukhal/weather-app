import { put, call, takeEvery } from 'redux-saga/effects'
import { setLocationFromIP } from '@store/reducers/locationSlice'
import {
  setIsLoadingCity,
  setLoadingIsFinishedCity,
  setErrorCity,
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
  }
}

export function* initialLocationWatcher() {
  yield takeEvery(setIsLoadingCity.type, getInitialLocationWorker)
}
