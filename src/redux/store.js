import { configureStore } from '@reduxjs/toolkit'
import { todosSlice } from './slice';

const store = configureStore({
    todos: todosSlice.reducer,
})
export default store;