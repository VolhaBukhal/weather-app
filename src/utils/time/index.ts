export const getWholeDayInfoFromString = (timeNow: Date) => {
  const year = timeNow.getFullYear()
  const day = timeNow.getDay()
  const todayDate = timeNow.getDate()
  const month = timeNow.getMonth()
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  return `${days[day]}, ${todayDate} ${months[month]} ${year}`
}

export function getDayNameFromString(date: string | number) {
  let tempDate: string | number
  if (typeof date === 'string') {
    tempDate = date as string
  } else {
    tempDate = (date as number) * 1000
  }
  const time = new Date(tempDate)
  const day = time.getDay()
  const lib = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return lib[day]
}

function makeDoubleSignsNumberFromSingle(number: number) {
  return number < 10 ? `0${number}` : number.toString()
}

export function getHourFromString(time: string | number) {
  let curTime
  if (typeof time === 'number') {
    curTime = new Date(time * 1000)
  } else {
    curTime = new Date(time)
  }
  const hours = curTime.getHours()
  return makeDoubleSignsNumberFromSingle(hours)
}

export function getDigitClockFromString(time: Date) {
  const hours = time.getHours()
  const minutes = time.getMinutes()
  return `
  ${makeDoubleSignsNumberFromSingle(hours % 12 || 12)}:${makeDoubleSignsNumberFromSingle(minutes)}`
}

export function getLocalHourForHourlyForecastOpenWeather(time: number, timeOffset: number) {
  const curHour = new Date(time * 1000)
  const hours = curHour.getHours()
  const offSetInHours = timeOffset / 3600
  const localOffSet = curHour.getTimezoneOffset() / 60

  const dif = offSetInHours + localOffSet
  const localHours = hours + dif
  return localHours > 12
    ? makeDoubleSignsNumberFromSingle(localHours % 12)
    : makeDoubleSignsNumberFromSingle(localHours)
}

export function getLocalTimeAccuWeather(time: string) {
  const date = new Date(time)
  // eslint-disable-next-line no-debugger
  debugger
  return getDigitClockFromString(date)
}

export function getLocalTimeOpenWeather(offSet: number) {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const localOffSetFromUTC = now.getTimezoneOffset() / 60 // in hours
  const incomeOffSet = offSet / 3600 // from api comes in ms

  const dif = incomeOffSet + localOffSetFromUTC
  const curHours =
    hours + dif > 24
      ? makeDoubleSignsNumberFromSingle((hours + dif) % 24)
      : makeDoubleSignsNumberFromSingle(hours + dif)

  return `${curHours}:${makeDoubleSignsNumberFromSingle(minutes)}`
}
