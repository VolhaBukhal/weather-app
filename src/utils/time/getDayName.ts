export function getDayNameFromString(date: string) {
  const time = new Date(date)
  const day = time.getDay()
  const lib = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return lib[day]
}
