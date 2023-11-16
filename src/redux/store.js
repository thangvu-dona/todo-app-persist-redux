import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit"
import todoReducer from "../components/TodoList/todoListSlice";
import filtersReducer from "../components/Filters/FiltersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootReducer = combineReducers({
  todoList: todoReducer,
  filters: filtersReducer,
})

const persistConfig = {
  key: 'root',
  storage, // refer to localStorage
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)

export const persistor = persistStore(store);

// Redux toolkit for create store without persist
// const store = configureStore({
//   reducer: {
//     todoList: todoReducer,
//     filters: filtersReducer,
//   }
// });

// export default store
