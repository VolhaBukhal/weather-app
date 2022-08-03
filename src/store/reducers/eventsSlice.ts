import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IEventsListResponse, IEventState } from '@interfaces/index'

const initialState: IEventState = {
  items: [],
  isSynchronize: false,
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<IEventsListResponse>) => {
      state.items = action.payload.result.items
    },
    isSynchronize: (state) => {
      state.isSynchronize = true
    },
  },
})

export const { setEvents, isSynchronize } = eventsSlice.actions

export default eventsSlice.reducer
