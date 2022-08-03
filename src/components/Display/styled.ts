import styled from 'styled-components'

const WIDTH_CONTAINER = '80'
const HEIGHT = '90'
const HEIGHT_SHADOWED = '45'

export const DisplayContainer = styled.div`
  width: ${WIDTH_CONTAINER}vw;
  height: ${HEIGHT}vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows};
`

export const DisplayItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: ${({ theme }) => theme.spaces[3]}px ${({ theme }) => theme.spaces[3]}px 0
    ${({ theme }) => theme.spaces[3]}px;
`

export const DisplayItemShadowed = styled(DisplayItem)`
  height: ${HEIGHT_SHADOWED}%;
  background-color: rgba(16, 17, 19, 0.6);
  gap: ${({ theme }) => theme.spaces[4]}px;
`

export const DisplayItemColumn = styled(DisplayItem)`
  flex-direction: column;
`
