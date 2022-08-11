import { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux.hooks'
import { setCurrentApi } from '@store/reducers/locationSlice'
import { APIs } from '@constants/api'
import { Input } from './Input'
import { Wrapper } from './styled'

export const ApiControl = () => {
  const { curAPI } = useAppSelector((state) => state.location)
  const dispatch = useAppDispatch()

  const handleSelectChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentApi(event.currentTarget.value as APIs))
  }
  return (
    <Wrapper>
      <Input
        value={APIs.OPENWEATHER}
        checked={curAPI === APIs.OPENWEATHER}
        handleSelect={handleSelectChange}
        label="OpenWeather"
      />
      <Input
        value={APIs.ACCUWEATHER}
        checked={curAPI === APIs.ACCUWEATHER}
        handleSelect={handleSelectChange}
        label="AccuWeather"
      />
    </Wrapper>
  )
}
