import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import storage from 'redux-persist/lib/storage'

import { rootSaga } from '@store/sagas/index'
import location from './reducers/locationSlice'
import loading from './reducers/loadingSlice'
import weather from './reducers/weatherSlice'
import events from './reducers/eventsSlice'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  location,
  loading,
  weather,
  events,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
})

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
