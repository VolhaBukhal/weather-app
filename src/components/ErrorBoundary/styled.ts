import styled from 'styled-components'

const WIDTH = '90'
const HEIGHT = '40'

export const ErrorWrapper = styled.p`
  /* display: flex;
  justify-content: center;
  align-items: center;
  width: ${WIDTH}vw;
  height: ${HEIGHT}vh; */
`

export const Heading = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.white};
`
