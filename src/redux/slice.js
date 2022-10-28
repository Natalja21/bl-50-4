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
  },
});

export const { addToDo } = todosSlice.actions;
export const todoReducers = todosSlice.reducer;
