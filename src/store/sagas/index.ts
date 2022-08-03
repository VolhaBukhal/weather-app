import { all, call } from 'redux-saga/effects'

import { initialLocationWatcher } from './locationSaga'
import { accuWeatherWatcher } from './weatherSaga'
import { loadUpcomingEventsWatcher } from './calendarSaga'

export function* rootSaga() {
  yield all([call(initialLocationWatcher), accuWeatherWatcher(), call(loadUpcomingEventsWatcher)])
}
