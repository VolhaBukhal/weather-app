export interface InputProps {
  value: string
  checked: boolean
  handleSelect: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}
