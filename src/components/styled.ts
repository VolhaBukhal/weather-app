import styled from 'styled-components'

const HEIGHT = '50'
const WIDTH = '100'
const HEIGHT_SMALL = '40'
const WIDTH_SMALL = '80'

export const Icon = styled.div<{ iconNumber: number | string }>`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ iconNumber }) =>
    `url(${process.env.PUBLIC_URL}/images/icons/accuweather/${iconNumber}.png)`};
`

export const IconSmall = styled(Icon)`
  width: ${WIDTH_SMALL}px;
  height: ${HEIGHT_SMALL}px;
`

export const IconOpenWeather = styled(Icon)`
  background-image: ${({ iconNumber }) =>
    `url(http://openweathermap.org/img/wn/${iconNumber}@2x.png)`};
`

export const IconSmallOpenWeather = styled(IconSmall)`
  background-image: ${({ iconNumber }) =>
    `url(http://openweathermap.org/img/wn/${iconNumber}@2x.png)`};
`

export const TemperatureValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`
export const TemperatureValueBig = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`
