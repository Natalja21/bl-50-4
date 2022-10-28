import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './slice';

const store = configureStore({
  reducer: todoReducers,
});
export default store;
