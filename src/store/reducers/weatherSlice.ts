import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IAccuWeatherCurrent, IWeatherData } from '@interfaces/index'

const initialState: IWeatherData = {
  accuweather: {
    current: {
      WeatherText: '',
      IsDayTime: true,
      WeatherIcon: 1,
      Temperature: {
        Metric: {
          Value: 1,
          Unit: '',
        },
      },
    },
  },
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentAccuWeather: (state, action: PayloadAction<IAccuWeatherCurrent>) => {
      state.accuweather.current = action.payload
    },
  },
})

export const { setCurrentAccuWeather } = weatherSlice.actions

export default weatherSlice.reducer
