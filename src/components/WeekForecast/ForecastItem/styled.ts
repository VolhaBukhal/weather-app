import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.fontSizes[6]}px;
`
export const DayName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`
