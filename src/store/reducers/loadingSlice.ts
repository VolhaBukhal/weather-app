import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoadingCity: false,
  errorCity: false,
  isLoadingWeather: true,
  errorWeather: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoadingCity: (state) => {
      state.isLoadingCity = true
      state.errorCity = false
    },
    setIsLoadingAccuWeather: (state) => {
      state.isLoadingWeather = true
      state.errorWeather = false
    },
    setLoadingIsFinishedCity: (state) => {
      state.isLoadingCity = false
    },
    setLoadingIsFinishedWeather: (state) => {
      state.isLoadingWeather = false
    },
    setErrorCity: (state) => {
      state.errorCity = true
      state.isLoadingCity = false
    },
    setErrorWeather: (state) => {
      state.errorCity = true
      state.isLoadingWeather = false
    },
  },
})

export const {
  setIsLoadingCity,
  setIsLoadingAccuWeather,
  setLoadingIsFinishedCity,
  setLoadingIsFinishedWeather,
  setErrorCity,
  setErrorWeather,
} = loadingSlice.actions

export default loadingSlice.reducer
