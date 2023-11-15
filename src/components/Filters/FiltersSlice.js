import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterchange: (state, action) => {
      state.priorities = action.payload
    }
  }
})

export const { searchFilterChange, statusFilterChange, priorityFilterchange } = filterSlice.actions
export default filterSlice.reducer

