import { useState, useEffect, useMemo } from 'react'
import { getWholeDayInfoFromString, getDigitClockFromString } from '@utils/time'
import { Wrapper, TimeItem, Time, DayInfo, DayPart } from './styled'

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date())
  const [today] = useState(() => new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return function clear() {
      clearInterval(timerId)
    }
  }, [setCurrentTime])

  const currentDayInfo = useMemo(() => getWholeDayInfoFromString(today), [today])
  const memorizedDigitClock = useMemo(() => getDigitClockFromString(currentTime), [currentTime])
  const dayPartName = useMemo(() => (currentTime.getHours() < 12 ? 'am' : 'pm'), [currentTime])

  return (
    <Wrapper>
      <TimeItem>
        <Time>{memorizedDigitClock}</Time>
        <DayPart>{dayPartName}</DayPart>
      </TimeItem>
      <DayInfo>{currentDayInfo}</DayInfo>
    </Wrapper>
  )
}
