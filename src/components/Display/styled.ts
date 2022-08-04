import styled from 'styled-components'

const WIDTH_CONTAINER_LARGE = '80'
const HEIGHT_CONTAINER_LARGE = '90'
const WIDTH_CONTAINER_MEDIUM = '95'
const WIDTH_CONTAINER_SMALL = '100'
const HEIGHT_SHADOWED = '45'

export const DisplayContainer = styled.div`
  width: ${WIDTH_CONTAINER_LARGE}vw;
  height: ${HEIGHT_CONTAINER_LARGE}vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces[3]}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: ${({ theme }) => theme.boxShadows};
  @media (max-width: ${({ theme }) => theme.size.med}px) {
    width: ${WIDTH_CONTAINER_MEDIUM}%;
    height: unset;
  }
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    width: ${WIDTH_CONTAINER_SMALL}%;
    box-shadow: none;
  }
`
export const DisplayTopItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: ${({ theme }) => theme.spaces[3]}px ${({ theme }) => theme.spaces[3]}px 0
    ${({ theme }) => theme.spaces[3]}px;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    flex-direction: column;
    align-items: center;
    width: ${WIDTH_CONTAINER_SMALL}%;
  }
`

export const DisplayItemShadowed = styled(DisplayTopItem)`
  height: ${HEIGHT_SHADOWED}%;
  background-color: rgba(16, 17, 19, 0.6);
  gap: ${({ theme }) => theme.spaces[4]}px;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    height: auto;
  }
`

export const DisplayItemColumn = styled(DisplayTopItem)`
  flex-direction: column;
`
