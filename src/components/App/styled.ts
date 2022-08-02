import styled from 'styled-components'
import { APIs } from '@constants/api'

const WIDTH = '100'
const HEIGHT = '100'
const BACKGROUNDS_ACCUWEATHER = [
  0, 1, 2, 3, 3, 5, 6, 6, 8, 0, 0, 11, 14, 14, 14, 15, 14, 14, 18, 8, 6, 6, 22, 22, 24, 25, 25, 0,
  0, 29, 30, 31, 32, 33, 35, 35, 35, 35, 35, 35, 35, 41, 41, 43, 44,
]

const BACKGROUNDS_OPENWEATHER = {
  '2': 3,
  '01d': 1,
  '02d': 3,
  '03d': 5,
  '04d': 7,
  '09d': 14,
  '10d': 11,
  '11d': 15,
  '13d': 29,
  '50d': 11,
  '01n': 33,
  '02n': 35,
  '03n': 35,
  '04n': 43,
  '09n': 18,
  '10n': 18,
  '11n': 41,
  '13n': 44,
  '50n': 11,
}

export const Container = styled.div<{
  iconNumber: unknown
  currentApi: string
}>`
  width: ${WIDTH}vw;
  height: ${HEIGHT}vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.8s;
  background-image: ${({ iconNumber, currentApi }) =>
    `url(/images/bgs/${
      currentApi === APIs.ACCUWEATHER
        ? BACKGROUNDS_ACCUWEATHER[iconNumber as number] || 2
        : BACKGROUNDS_OPENWEATHER[iconNumber as keyof typeof BACKGROUNDS_OPENWEATHER]
    }.webp)`};
`
