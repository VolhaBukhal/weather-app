import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  IAccuWeatherCurrent,
  IWeatherData,
  IAccuWeatherFiveDays,
  IAccuWeatherOneHour,
} from '@interfaces/index'

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
      RealFeelTemperature: {
        Metric: {
          Value: 1,
          Phrase: '',
        },
      },
      RelativeHumidity: 1,
      Wind: {
        Speed: {
          Metric: {
            Value: 1,
            Unit: '',
          },
        },
      },
    },
    fiveDays: {
      Headline: {
        Text: '',
      },
      DailyForecasts: [],
    },
    hourly: [],
  },
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentAccuWeather: (state, action: PayloadAction<IAccuWeatherCurrent>) => {
      state.accuweather.current = action.payload
    },
    setFiveDaysAccuWeather: (state, action: PayloadAction<IAccuWeatherFiveDays>) => {
      state.accuweather.fiveDays = action.payload
    },
    setHourlyAccuWeather: (state, action: PayloadAction<IAccuWeatherOneHour[]>) => {
      state.accuweather.hourly = action.payload
    },
  },
})

export const { setCurrentAccuWeather, setFiveDaysAccuWeather, setHourlyAccuWeather } =
  weatherSlice.actions

export default weatherSlice.reducer
