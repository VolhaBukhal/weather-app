import styled from 'styled-components'

const WIDTH = '80'
const HEIGHT = '100'

export const WeekForecastContainer = styled.div`
  width: ${WIDTH}%;
  height: ${HEIGHT}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const HeadlineInfo = styled.p`
  text-align: center;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
