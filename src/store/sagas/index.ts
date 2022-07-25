import { all } from 'redux-saga/effects'

import { initialLocationWatcher } from './locationSaga'

export function* rootSaga() {
  yield all([initialLocationWatcher()])
}
