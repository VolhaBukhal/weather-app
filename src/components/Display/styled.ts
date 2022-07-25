import styled from 'styled-components'

const WIDTH_CONTAINER = '80'
const HEIGHT = '90'

export const DisplayContainer = styled.div`
  width: ${WIDTH_CONTAINER}vw;
  height: ${HEIGHT}vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spaces[3]}px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows};
`

export const DisplayItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const DisplayItemColumn = styled(DisplayItem)`
  flex-direction: column;
`
