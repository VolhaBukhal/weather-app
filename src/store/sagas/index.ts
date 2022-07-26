import { all } from 'redux-saga/effects'

import { initialLocationWatcher } from './locationSaga'
import { AccuWeatherWatcher } from './weatherSaga'

export function* rootSaga() {
  yield all([initialLocationWatcher(), AccuWeatherWatcher()])
}
