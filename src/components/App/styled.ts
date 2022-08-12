import styled from 'styled-components'
import { APIs } from '@constants/api'
import { BACKGROUNDS_ACCUWEATHER, BACKGROUNDS_OPENWEATHER } from '@constants/index'

const WIDTH = '100'

export const Container = styled.div<{
  iconNumber: unknown
  currentApi: string
}>`
  width: ${WIDTH}%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaces[3]}px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 0.5s;
  background-image: ${({ iconNumber, currentApi }) =>
    `url(${process.env.PUBLIC_URL}/images/bgs/${
      currentApi === APIs.ACCUWEATHER
        ? BACKGROUNDS_ACCUWEATHER[iconNumber as number] || 2
        : BACKGROUNDS_OPENWEATHER[iconNumber as keyof typeof BACKGROUNDS_OPENWEATHER] || 2
    }.webp)`};
  @media (min-width: ${({ theme }) => theme.size.small}px) {
    height: 100%;
  }
`
