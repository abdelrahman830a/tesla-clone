import { configureStore } from '@reduxjs/toolkit';
import carRedcuer from '../features/car/carSlice';

export const store = configureStore({
  reducer: {
    car: carRedcuer,
  },
});
