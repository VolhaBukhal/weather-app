import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux.hooks'
import { setCurrentApi } from '@store/reducers/locationSlice'
import { APIs } from '@constants/api'
import { Wrapper, RadioButton, RadioButtonLabel, Item, Label } from './styled'

export const ApiControl = () => {
  const { curAPI } = useAppSelector((state) => state.location)
  const dispatch = useAppDispatch()

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentApi(event.currentTarget.value as APIs))
  }
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value={APIs.OPENWEATHER}
          checked={curAPI === APIs.OPENWEATHER}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <Label>OpenWeather</Label>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value={APIs.ACCUWEATHER}
          checked={curAPI === APIs.ACCUWEATHER}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <Label>AccuWeather</Label>
      </Item>
    </Wrapper>
  )
}
