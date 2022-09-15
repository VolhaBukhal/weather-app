import { IEventItem } from '@interfaces/index'
import { getInfoFromEventTime } from './helpers'
import { Item, ItemTime, Time, Summary } from './styled'

export const EventItem = ({ start, end, summary }: IEventItem) => {
  const { day, timeStart, timeEnd } = getInfoFromEventTime(start, end)

  return (
    <Item>
      <ItemTime>
        <div>{day}</div>
        <Time>
          {timeStart} - {timeEnd}
        </Time>
      </ItemTime>
      <Summary>{summary}</Summary>
    </Item>
  )
}
