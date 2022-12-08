import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priority: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    searchTextChange: (state, action) => {
      state.search = action.payload;
    },
    statusChange: (state, action) => {
      state.status = action.payload;
    },
    priorityChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchTextChange, statusChange, priorityChange } =
  filterSlice.actions;

export default filterSlice.reducer;
