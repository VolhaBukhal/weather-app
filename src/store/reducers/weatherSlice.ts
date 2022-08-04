import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IWeatherData, IOpenWeatherAll, IAccuWeatherCity } from '@interfaces/index'

const initialState: IWeatherData = {
  accuweather: {},
  openweather: {},
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setAccuWeather: (state, action: PayloadAction<{ city: string; weather: IAccuWeatherCity }>) => {
      const { city } = action.payload
      const { weather } = action.payload
      state.accuweather[city] = weather
    },
    setOpenWeather: (state, action: PayloadAction<{ city: string; weather: IOpenWeatherAll }>) => {
      const { city } = action.payload
      const { weather } = action.payload
      state.openweather[city] = weather
    },
    resetWeather: (state) => {
      state.accuweather = {}
      state.openweather = {}
    },
  },
})

export const { setAccuWeather, setOpenWeather, resetWeather } = weatherSlice.actions

export default weatherSlice.reducer
