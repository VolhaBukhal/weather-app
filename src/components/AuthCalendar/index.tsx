import { useState, MouseEvent } from 'react'
import { v4 as uuid } from 'uuid'

import { apiCalendar } from '@utils/api/googlecalendar'
import { useAppDispatch, useAppSelector } from '@hooks/redux.hooks'
import { ButtonLabels } from '@constants/index'
import { isSynchronize } from '@store/reducers/eventsSlice'

import { EventItem } from '@components/EventList'

import { Button } from '@components/styled'
import { Container } from './styled'

export const AuthCalendar = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const events = useAppSelector((store) => store.events.items)
  const dispatch = useAppDispatch()

  const handleItemClick = (event: MouseEvent<HTMLButtonElement>) => {
    const buttonLabel = event.currentTarget.textContent
    if (buttonLabel === ButtonLabels.SIGN_IN) {
      apiCalendar.handleAuthClick()
      setIsAuthorized(true)
    } else {
      dispatch(isSynchronize())
    }
  }

  return (
    <Container>
      <Button type="button" onClick={handleItemClick}>
        {!isAuthorized ? ButtonLabels.SIGN_IN : ButtonLabels.SYNCHRONIZE}
      </Button>
      {events.length > 0 && events.map((item) => <EventItem key={uuid()} {...item} />)}
    </Container>
  )
}
