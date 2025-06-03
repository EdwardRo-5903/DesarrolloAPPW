import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    value: [], 
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload); 
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload); 
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todos.value; 
export default todoSlice.reducer; 