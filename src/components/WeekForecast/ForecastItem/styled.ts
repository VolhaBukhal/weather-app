import styled from 'styled-components'

import { BOTTOM_COLORED_RADIUS } from '@components/styled'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.fontSizes[6]}px;
`
export const DayName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding: ${({ theme }) => theme.spaces[1]}px ${({ theme }) => theme.spaces[2]}px;
  ${BOTTOM_COLORED_RADIUS}
`
