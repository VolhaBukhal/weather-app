import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  // IAccuWeatherPayload,
  // IAccuWeatherCurrent,
  IWeatherData,
  // IAccuWeatherFiveDays,
  // IAccuWeatherOneHour,
  IWeatherCity,
} from '@interfaces/index'

const initialState: IWeatherData = {
  accuweather: {},
}

// current: {
//   WeatherText: '',
//   IsDayTime: true,
//   WeatherIcon: 1,
//   Temperature: {
//     Metric: {
//       Value: 1,
//       Unit: '',
//     },
//   },
//   RealFeelTemperature: {
//     Metric: {
//       Value: 1,
//       Phrase: '',
//     },
//   },
//   RelativeHumidity: 1,
//   Wind: {
//     Speed: {
//       Metric: {
//         Value: 1,
//         Unit: '',
//       },
//     },
//   },
// },
// fiveDays: {
//   Headline: {
//     Text: '',
//   },
//   DailyForecasts: [],
// },
// hourly: [],

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setAccuWeather: (state, action: PayloadAction<{ city: string; weather: IWeatherCity }>) => {
      const { city } = action.payload
      const { weather } = action.payload
      console.log('[city in setCurrentAccuWeather and weather]: ', city, weather)
      state.accuweather[city] = weather
    },

    // setCurrentAccuWeather: (
    //   state,
    //   action: PayloadAction<{ city: string; weather: IAccuWeatherCurrent }>
    // ) => {
    //   const { city } = action.payload
    //   const { weather } = action.payload
    //   console.log('[city in setCurrentAccuWeather and weather]: ', city, weather)
    //   state.accuweather[city].current = weather
    // },
    // setFiveDaysAccuWeather: (
    //   state,
    //   action: PayloadAction<{ city: string; weather: IAccuWeatherFiveDays }>
    // ) => {
    //   state.accuweather[action.payload.city].fiveDays = action.payload.weather
    // },
    // setHourlyAccuWeather: (
    //   state,
    //   action: PayloadAction<{ city: string; weather: IAccuWeatherOneHour[] }>
    // ) => {
    //   state.accuweather[action.payload.city].hourly = action.payload.weather
    // },
  },
})

export const {
  setAccuWeather,
  //  setFiveDaysAccuWeather,
  // setHourlyAccuWeather
} = weatherSlice.actions

export default weatherSlice.reducer
