import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../components/TodoList/todoListSlice";
import filtersReducer from "../components/Filters/FiltersSlice";

const store = configureStore({
  reducer: {
    todoList: todoReducer,
    filters: filtersReducer,
  }
});

export default store