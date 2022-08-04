import styled, { css } from 'styled-components'

const HEIGHT = '50'
const WIDTH = '100'
const HEIGHT_SMALL = '40'
const WIDTH_SMALL = '80'
const TIME = '0.5'

export const SCROLL = css`
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.fontSizes[0] / 2}px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: ${({ theme }) => theme.borderRadius}px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.dark};
    }
  }
`
export const BOTTOM_COLORED_RADIUS = css`
  border-radius: ${({ theme }) => theme.borderRadius - 4}px;
  border-bottom: ${({ theme }) => theme.spaces[1] / 2}px solid
    ${({ theme }) => theme.colors.darkorange};
`

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
    `url(https://openweathermap.org/img/wn/${iconNumber}@2x.png)`};
`

export const IconSmallOpenWeather = styled(IconSmall)`
  background-image: ${({ iconNumber }) =>
    `url(https://openweathermap.org/img/wn/${iconNumber}@2x.png)`};
`

export const TemperatureValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`
export const TemperatureValueBig = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`

export const Button = styled.button`
  width: ${WIDTH}%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.shadowed};
  border: none;
  border-radius: 0 0 ${({ theme }) => theme.borderRadius / 2}px
    ${({ theme }) => theme.borderRadius / 2}px;

  padding: ${({ theme }) => theme.spaces[1]}px ${({ theme }) => theme.spaces[2]}px;
  transition: ${TIME}s;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkorange};
  }
`
