import styled from 'styled-components'

import { APIs } from '@constants/api'

const WIDTH = '80'
const WIDTH_SMALL_WINDOW = '90'
const HEIGHT = '98'
const WIDTH_LOGO = '150'
const HEIGHT_LOGO = '40'

export const WeekForecastContainer = styled.div`
  width: ${WIDTH}%;
  height: ${HEIGHT}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    width: ${WIDTH_SMALL_WINDOW}%;
  }
`
export const HeadlineItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: ${({ theme }) => theme.spaces[3]}px;
`
export const HeadlineInfo = styled.p`
  text-align: center;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  flex-grow: 1;
`
export const HeadlineLogo = styled.div<{ currentApi: string }>`
  width: ${WIDTH_LOGO}px;
  height: ${HEIGHT_LOGO}px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${({ currentApi }) =>
    currentApi === APIs.OPENWEATHER
      ? `url(${process.env.PUBLIC_URL}/images/icons/logos/openweather.png)`
      : `url(${process.env.PUBLIC_URL}/images/icons/logos/accuweather.png)`};
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: ${({ theme }) => theme.spaces[3]}px;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    flex-direction: column;
  }
`
