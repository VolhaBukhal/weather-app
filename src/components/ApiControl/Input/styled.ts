import styled, { css } from 'styled-components'

const GREY_BORDER = css`
  border: 1px solid ${({ theme }) => theme.colors.grey};
`
const WHITE_BORDER = css`
  border: 3px solid ${({ theme }) => theme.colors.white};
`

const WIDTH = '25'
const HEIGHT = '25'
const HEIGHT_BIG = '48'
const WIDTH_MIDDLE = '14'
const HEIGHT_MIDDLE = '14'
const WIDTH_SMALL = '12'
const HEIGHT_SMALL = '12'
const BORDER_RADIUS = '50'
const MARGIN_SMALL = '4'
const MARGIN_MIDDLE = '10'
const MARGIN_BIG = '16'
const TOP = '34'

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: ${HEIGHT_BIG}px;
  position: relative;
`

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: ${TOP}%;
  left: ${MARGIN_BIG}px;
  width: ${WIDTH_MIDDLE}px;
  height: ${HEIGHT_MIDDLE}px;
  border-radius: ${BORDER_RADIUS}%;
  background: ${({ theme }) => theme.colors.white};
  ${GREY_BORDER}
`
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  margin-right: ${MARGIN_MIDDLE}px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: ${({ theme }) => theme.colors.white};
      width: ${WIDTH_SMALL}px;
      height: ${HEIGHT_SMALL}px;
      margin: ${MARGIN_SMALL}px;
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
      width: ${WIDTH_SMALL}px;
      height: ${HEIGHT_SMALL}px;
      margin: ${MARGIN_SMALL}px;
    }
  }
`
export const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
