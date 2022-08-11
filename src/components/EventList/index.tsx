import { IEventItem } from '@interfaces/index'
import { Item, ItemTime, Time, Summary } from './styled'

export const EventItem = ({ start, end, summary }: IEventItem) => {
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
