import { IEventPeriod } from '@interfaces/index'

export const getInfoFromEventTime = (start: IEventPeriod, end: IEventPeriod) => {
  const day = new Date(start.dateTime).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
  const timeStart = new Date(start.dateTime).toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
  })
  const timeEnd = new Date(end.dateTime).toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: '2-digit',
  })

  return { day, timeStart, timeEnd }
}
