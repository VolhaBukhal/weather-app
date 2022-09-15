import { Item, RadioButton, RadioButtonLabel, Label } from './styled'
import { InputProps } from './types'

export const Input = ({ value, checked, handleSelect, label }: InputProps) => (
  <Item>
    <RadioButton
      type="radio"
      name="radio"
      value={value}
      checked={checked}
      onChange={handleSelect}
    />
    <RadioButtonLabel />
    <Label>{label}</Label>
  </Item>
)
