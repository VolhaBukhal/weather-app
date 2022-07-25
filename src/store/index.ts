import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '@store/sagas'
import locationReducer from './reducers/locationSlice'
import loadingSlice from './reducers/loadingSlice'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    location: locationReducer,
    loading: loadingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
