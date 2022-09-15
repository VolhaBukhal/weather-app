import styled from 'styled-components'

const WIDTH = '100'

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: ${WIDTH}%;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    justify-content: space-evenly;
  }
`
