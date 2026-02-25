import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/auth-slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  })
};
