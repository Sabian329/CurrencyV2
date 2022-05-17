import { configureStore } from '@reduxjs/toolkit';
import setText from '../slices/addInfo';

export const store = configureStore({
  reducer: {
    message: setText
  }
});
