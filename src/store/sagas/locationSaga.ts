import { put, takeEvery, call } from 'redux-saga/effects'

import { setLocationFromIP } from '@store/reducers/locationSlice'
import {
  setIsLoadingCity,
  setLoadingIsFinishedCity,
  setErrorCity,
} from '@store/reducers/loadingSlice'

import { fetchInitialLocation } from '@utils/api/location'

import { ILocationData } from '@interfaces/index'
// import { RootState } from '../index'

// import { SET_LOCATION } from '@store/actions/constants'

function* getInitialLocationWorker() {
  // const city = yield select((state) => state.location.city)
  // const city: string = yield select((state: RootState) => state.location.city)
  // console.log('from selector inside getInitialLocationWorker: ', city)
  try {
    const result: ILocationData = yield call(fetchInitialLocation)
    yield put(setLocationFromIP(result))
    yield put(setLoadingIsFinishedCity())
  } catch {
    yield put(setErrorCity())
  }
}

export function* initialLocationWatcher() {
  // yield takeEvery(SET_LOCATION, getInitialLocationWorker)
  yield takeEvery(setIsLoadingCity.type, getInitialLocationWorker)
}
