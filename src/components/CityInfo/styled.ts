import styled, { css } from 'styled-components'

const WIDTH_CONTAINER = '30'
const WEIGHT = '300'
const OPACITY = '0.7'
const BORDER_BOTTOM = '1px solid white'

const InputText = css`
  color: ${({ theme }) => theme.colors.white};
  opacity: ${OPACITY};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${WEIGHT};
`

export const CityInfoContainer = styled.div`
  width: ${WIDTH_CONTAINER}%;
`

export const CitySearch = styled.input.attrs(({ ref }) => ({
  ref,
}))`
  margin-top: ${({ theme }) => theme.fontSizes[3]}px;
  background-color: transparent;
  border: none;
  border-bottom: ${BORDER_BOTTOM};
  padding: ${({ theme }) => theme.spaces[1]}px ${({ theme }) => theme.spaces[2]}px;
  ${InputText}
  &::placeholder {
    ${InputText}
  }
`

export const City = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  text-transform: capitalize;
`

export const Country = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  text-transform: capitalize;
`
