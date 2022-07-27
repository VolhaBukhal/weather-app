import styled from 'styled-components'

const HEIGHT = '50'
const WIDTH = '100'
const HEIGHT_SMALL = '40'
const WIDTH_SMALL = '80'

export const Icon = styled.div<{ iconNumber: number }>`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ iconNumber }) => `url(/images/icons/accuweather/${iconNumber}.png)`};
`

export const IconSmall = styled(Icon)`
  width: ${WIDTH_SMALL}px;
  height: ${HEIGHT_SMALL}px;
`

export const TemperatureValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`
export const TemperatureValueBig = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`
