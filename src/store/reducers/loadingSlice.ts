import { createSlice } from '@reduxjs/toolkit'

const initialState: { isLoading: boolean; error: boolean } = {
  isLoading: true,
  error: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true
      state.error = false
    },
    setLoadingIsFinished: (state) => {
      state.isLoading = false
    },
    setError: (state) => {
      state.error = true
    },
  },
})

export const { setIsLoading, setLoadingIsFinished, setError } = loadingSlice.actions

export default loadingSlice.reducer
