import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  box-sizing: border-box;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 34%;
  left: 16px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`
export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: darkorange;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: ${({ theme }) => theme.colors.darkorange};
    border: 3px solid white;
    &::after {
      display: block;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`
export const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
