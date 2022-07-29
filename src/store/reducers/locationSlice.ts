import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILocationData, ILocationState } from '@interfaces/index'

const initialState: ILocationState = {
  city: '',
  country: '',
  lon: '',
  lat: '',
  weatherIcon: 2,
  defaultLocation: {
    city: '',
    country: '',
    lon: '',
    lat: '',
  },
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationFromIP: (state, action: PayloadAction<ILocationData>) => {
      state.city = action.payload.city
      state.country = action.payload.country
      state.lon = action.payload.longitude
      state.lat = action.payload.latitude
      state.defaultLocation.city = action.payload.city
      state.defaultLocation.country = action.payload.country
      state.defaultLocation.lon = action.payload.longitude
      state.defaultLocation.lat = action.payload.latitude
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
    setDefaultLocation: (state) => {
      state.city = state.defaultLocation.city
      state.country = state.defaultLocation.country
      state.lat = state.defaultLocation.lat
      state.lon = state.defaultLocation.lon
    },
  },
})

export const { setLocationFromIP, setCity, setCountry, setDefaultLocation } = locationSlice.actions

export default locationSlice.reducer
