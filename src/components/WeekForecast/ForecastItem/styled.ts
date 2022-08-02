import styled, { css } from 'styled-components'

const DAY_BOTTOM_RADIUS = css`
  border-bottom: ${({ theme }) => theme.spaces[1] / 2}px solid
    ${({ theme }) => theme.colors.darkorange};
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.fontSizes[6]}px;
`
export const DayName = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  padding: ${({ theme }) => theme.spaces[1]}px ${({ theme }) => theme.spaces[2]}px;
  border-radius: ${({ theme }) => theme.borderRadius - 4}px;
  ${DAY_BOTTOM_RADIUS}
`
