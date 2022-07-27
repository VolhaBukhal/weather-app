export function getTimeFromString(time: string) {
  const curTime = new Date(time)
  const hours = curTime.getHours()
  return +hours < 10 ? `0${hours}` : hours
}
