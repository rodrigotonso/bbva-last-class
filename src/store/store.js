import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'store/slices/counter'
import userReducer from 'store/slices/user'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})