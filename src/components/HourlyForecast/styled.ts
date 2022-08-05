import styled from 'styled-components'
import { SCROLL } from '@components/styled'

const HEIGHT_MEDIUM = '243'
const WIDTH = '20'
const WIDTH_FULL = '100'
const HEIGHT_FULL = '98'
const WEIGHT = '400'

export const Container = styled.div`
  height: ${HEIGHT_FULL}%;
  width: ${WIDTH}%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces[3]}px;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    width: ${WIDTH_FULL}%;
  }
`
export const RestrictedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${HEIGHT_MEDIUM}px;

  overflow: auto;
  ${SCROLL}
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    height: auto;
    width: ${WIDTH_FULL}%;
    flex-direction: row;
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]}px;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    flex-direction: column;
  }
`
export const Heading = styled.div`
  font-weight: ${WEIGHT};
  text-align: center;
  font-style: italic;
`
