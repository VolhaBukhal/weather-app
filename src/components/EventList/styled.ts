import styled from 'styled-components'
import { BOTTOM_COLORED_RADIUS } from '@components/styled'

export const Item = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`

export const ItemTime = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  gap: ${({ theme }) => theme.spaces[3]}px;
  padding: ${({ theme }) => theme.spaces[1]}px;
`
export const Time = styled.div`
  ${BOTTOM_COLORED_RADIUS}
`
export const Summary = styled.div`
  padding: ${({ theme }) => theme.spaces[1] / 2}px;
  align-self: flex-end;
  font-style: italic;
`
