import { configureStore } from '@reduxjs/toolkit';
import alertReducer from '../components/Alert/reducer';
export const store = configureStore({
  reducer: {
    alert:alertReducer
  },
});
