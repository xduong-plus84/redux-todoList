import { combineReducers } from "redux";
import filterReducer from "../Components/Filters/FilterReducer";
import todoReducer from "../Components/TodoList/TodoReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoReducer,
});

export default rootReducer;
