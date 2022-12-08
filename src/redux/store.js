// import { compose, createStore } from "redux";
// import rootReducer from "./reducer";

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

// const enhancer = composeEnhancers();

// const store = createStore(rootReducer, enhancer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../Components/Filters/filterSlice";
import todoReducer from "../Components/TodoList/todoSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    todo: todoReducer,
  },
});

export default store;
