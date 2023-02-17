import { configureStore, combineReducers } from '@reduxjs/toolkit'
import appSlice from './reducer'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
  }

  const reducers = combineReducers({
    appSlice: appSlice,
  });

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
  })

export const persistor = persistStore(store)