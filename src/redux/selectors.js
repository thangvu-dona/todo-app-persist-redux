import { createSelector } from "@reduxjs/toolkit"

export const searchFilterSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const prioritiesFilterSelector = (state) => state.filters.priorities
export const todoListSelector = (state) => state.todoList

export const todoRemainingSelector = createSelector(todoListSelector, searchFilterSelector, statusFilterSelector, prioritiesFilterSelector, (todoList, search, status, priorities) => {
  return todoList.filter((todo) => {
    if (status === 'All') {
      return priorities.length
        ? todo.name.includes(search) && priorities.includes(todo.priority)
        : todo.name.includes(search);
    }

    return (
      todo.name.includes(search) &&
      (status === 'Completed' ? todo.completed : !todo.completed) &&
      (priorities.length ? priorities.includes(todo.priority) : true) // length = 0 --> always true
    );
  });
})