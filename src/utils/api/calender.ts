import { IEventsListResponse } from '@interfaces/index'
import { apiCalendar } from './googlecalendar'

export function* getCalenderEven() {
  yield apiCalendar.handleAuthClick()
  const timeMin = new Date()
  const timeMax = new Date()
  timeMax.setDate(timeMin.getDate() + 10)
  yield apiCalendar
    .listEvents({
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      showDeleted: true,
      maxResults: 20,
      orderBy: 'updated',
    })
    .then(({ result }: IEventsListResponse) => {
      console.log(result.items)
    })
    .catch((e: Error) => {
      console.log(e.message)
    })
}
