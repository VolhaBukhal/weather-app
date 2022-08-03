import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '@store/sagas/index'
import location from './reducers/locationSlice'
import loading from './reducers/loadingSlice'
import weather from './reducers/weatherSlice'
import events from './reducers/eventsSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    location,
    loading,
    weather,
    events,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
