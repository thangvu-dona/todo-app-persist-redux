import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: '1', name: 'Learn React', priority: 'High', completed: false },
    { id: '2', name: 'Learn Redux', priority: 'Medium', completed: true },
    { id: '3', name: 'Learn JavaScript', priority: 'Low', completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodo: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if (currentTodo) currentTodo.completed = !currentTodo.completed
    }
  }
})

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;