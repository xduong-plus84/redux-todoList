import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Do Redux Core", priority: "Medium", isComplete: false },
  { id: 2, name: "Learn Redux Toolkit", priority: "Low", isComplete: true },
  { id: 3, name: "Learn Redux Thunk", priority: "High", isComplete: false },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    checkTask: (state, action) => {
      const currentTodo = state.find((ele) => ele.id === action.payload);
      if (currentTodo) {
        currentTodo.isComplete = !currentTodo.isComplete;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, checkTask } = todoSlice.actions;

export default todoSlice.reducer;
