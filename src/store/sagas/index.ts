import { all, call } from 'redux-saga/effects'

import { initialLocationWatcher } from './locationSaga'
import { AccuWeatherWatcher } from './weatherSaga'

export function* rootSaga() {
  yield all([call(initialLocationWatcher), AccuWeatherWatcher()])
}
