import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newItems = state.items.filter(({ id }) => {
        return id !== action.payload ? true : false;
      });
      state.items = newItems;
    },
  },
});

export const { addToDo, removeTodo } = todosSlice.actions;
export const todoReducers = todosSlice.reducer;
