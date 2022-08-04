import styled, { css } from 'styled-components'

const TEXT_SHADOW = css`
  text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
`
const WEIGHT = '700'
const WIDTH = '100'

export const Wrapper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.size.med}px) {
    width: ${WIDTH}%;
    align-items: center;
  }
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
  @media (max-width: ${({ theme }) => theme.size.med}px) {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
    font-weight: normal;
  }
`
export const DayPart = styled.span`
  align-self: flex-end;
  padding-bottom: ${({ theme }) => theme.spaces[2]}px;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  @media (max-width: ${({ theme }) => theme.size.med}px) {
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    font-weight: normal;
    padding-bottom: ${({ theme }) => theme.spaces[1]}px;
  }
`

export const DayInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  ${TEXT_SHADOW};
  @media (max-width: ${({ theme }) => theme.size.med}px) {
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
  }
`
