import { takeLatest, put, call } from 'redux-saga/effects'

import { setEvents, isSynchronize } from '@store/reducers/eventsSlice'

import { apiCalendar } from '@utils/api/googlecalendar'
import { IEventsListResponse } from '@interfaces/index'

function* getEventsFromCalendarWorker() {
  try {
    const response: IEventsListResponse = yield call(apiCalendar.listUpcomingEvents, 10)
    yield put(setEvents(response))
  } catch (err) {
    console.log(err)
  }
}

export function* loadUpcomingEventsWatcher() {
  yield takeLatest(isSynchronize.type, getEventsFromCalendarWorker)
}
