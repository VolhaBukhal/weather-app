import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ILocationData } from '@interfaces/index'

const initialState: ILocationData = {
  city: '',
  country: '',
  lon: '',
  lat: '',
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocationFromIP: (state, action: PayloadAction<ILocationData>) => {
      state.city = action.payload.city
      state.country = action.payload.country
      state.lon = action.payload.lon
      state.lat = action.payload.lat
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload
    },
  },
})

export const { setLocationFromIP, setCity, setCountry } = locationSlice.actions

export default locationSlice.reducer
