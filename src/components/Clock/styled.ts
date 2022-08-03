import styled, { css } from 'styled-components'

const TEXT_SHADOW = css`
  text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
`
const WEIGHT = '700'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const TimeItem = styled.div`
  display: flex;
  justify-content: start;
  gap: ${({ theme }) => theme.spaces[3]}px;
  font-weight: ${WEIGHT};
  ${TEXT_SHADOW};
`

export const Time = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[8]}px;
`
export const DayPart = styled.span`
  align-self: flex-end;
  padding-bottom: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`

export const DayInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  ${TEXT_SHADOW};
`
