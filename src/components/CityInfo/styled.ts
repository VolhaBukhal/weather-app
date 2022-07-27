import styled from 'styled-components'

const WIDTH_CONTAINER = '30'

export const CityInfoContainer = styled.div`
  width: ${WIDTH_CONTAINER}%;
`

export const CitySearch = styled.input.attrs(({ ref }) => ({
  ref,
}))``
