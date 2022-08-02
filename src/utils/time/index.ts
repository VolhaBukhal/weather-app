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
export function getTimeFromString(time: string | number) {
  const curTime = new Date(time)
  const hours = curTime.getHours()
  return makeDoubleSignsNumberFromSingle(hours)
}

export function getDigitClockFromString(time: Date) {
  const hours = time.getHours()
  const minutes = time.getMinutes()
  return `
  ${makeDoubleSignsNumberFromSingle(hours)}:${makeDoubleSignsNumberFromSingle(minutes)}`
}
