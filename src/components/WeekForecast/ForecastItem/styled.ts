import styled from 'styled-components'
import { BOTTOM_COLORED_RADIUS } from '@components/styled'

const WIDTH = '100'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.fontSizes[6]}px;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    width: ${WIDTH}%;
    flex-direction: row;
    justify-content: space-around;
  }
`
export const DayName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding: ${({ theme }) => theme.spaces[1]}px ${({ theme }) => theme.spaces[2]}px;
  ${BOTTOM_COLORED_RADIUS}
`
