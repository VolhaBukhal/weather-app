import { put, takeEvery, call } from 'redux-saga/effects'

import { setLocationFromIP } from '@store/reducers/locationSlice'
import { setIsLoading, setLoadingIsFinished, setError } from '@store/reducers/loadingSlice'

import { fetchInitialLocation } from '@utils/requests/location'

import { ILocationData } from '@interfaces/index'

import { SET_LOCATION } from '@store/actions/constants'

function* getInitialLocationWorker() {
  try {
    yield put(setIsLoading())
    const result: ILocationData = yield call(fetchInitialLocation)
    yield put(setLocationFromIP(result))
    yield put(setLoadingIsFinished())
  } catch {
    yield put(setError())
  }
}

export function* initialLocationWatcher() {
  yield takeEvery(SET_LOCATION, getInitialLocationWorker)
}
