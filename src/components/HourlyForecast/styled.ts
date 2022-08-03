import styled from 'styled-components'
import { SCROLL } from '@components/styled'

const HEIGHT = '80'
const WIDTH = '20'
const HEIGHT_FULL = '100'
const WEIGHT = '400'

export const Container = styled.div`
  height: ${HEIGHT_FULL}%;
  width: ${WIDTH}%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[3]}px;
`
export const RestrictedContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${HEIGHT}%;

  overflow: auto;
  ${SCROLL}
`
export const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: ${({ theme }) => theme.spaces[1]}px;
`

export const Heading = styled.div`
  font-weight: ${WEIGHT};
`
