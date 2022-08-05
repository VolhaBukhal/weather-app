import styled, { css } from 'styled-components'

const GREY_BORDER = css`
  border: 1px solid #ccc;
`
const WHITE_BORDER = css`
  border: 3px solid white;
`

const WIDTH = '100'
const WIDTH_SMALL = '25'
const BORDER_RADIUS = '50'

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: ${WIDTH}%;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.size.small}px) {
    justify-content: space-evenly;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.fontSizes[7]}px; // 48
  position: relative;
`

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 34%;
  left: ${({ theme }) => theme.fontSizes[2]}px; // 16
  width: ${({ theme }) => theme.fontSizes[1]}px; // 14
  height: ${({ theme }) => theme.fontSizes[1]}px; // 14
  border-radius: ${BORDER_RADIUS}%;
  background: ${({ theme }) => theme.colors.white};
  ${GREY_BORDER}
`
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: ${WIDTH_SMALL}px;
  height: ${WIDTH_SMALL}px;
  margin-right: ${({ theme }) => theme.fontSizes[0] - 2}px; // 10
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: ${({ theme }) => theme.colors.white};
      width: ${({ theme }) => theme.fontSizes[0]}px; // 12
      height: ${({ theme }) => theme.fontSizes[0]}px; // 12
      margin: ${({ theme }) => theme.spaces[1]}px; // 4
    }
  }
  &:checked + ${Item} {
    background: ${({ theme }) => theme.colors.darkorange};
  }
  &:checked + ${RadioButtonLabel} {
    background: ${({ theme }) => theme.colors.darkorange};
    ${WHITE_BORDER}
    &::after {
      display: block;
      width: ${({ theme }) => theme.fontSizes[0]}px; // 12
      height: ${({ theme }) => theme.fontSizes[0]}px; // 12
      margin: ${({ theme }) => theme.spaces[1]}px; // 4
    }
  }
`
export const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
