import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore , persistReducer } from 'redux-persist'
import userslice from '../slices/userslice'

const persistconfig = {
    key:'root',
    version:1,
    storage
}

const persistedReducer = persistReducer(persistconfig, userslice);


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
})

export const persistor = persistStore(store);