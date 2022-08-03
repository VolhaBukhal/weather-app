import { useAppSelector } from '@hooks/redux.hooks'

import { Display } from '@components/Display'
import { Container } from './styled'

export const App = () => {
  const { curAPI, curIcon } = useAppSelector((state) => state.location)
  return (
    <Container iconNumber={curIcon} currentApi={curAPI}>
      <Display />
    </Container>
  )
}
