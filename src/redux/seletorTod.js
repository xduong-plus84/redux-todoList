// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   console.log("searchText: ", searchText);
//   const todoRemaining = state.todoList.filter((item) => {
//     console.log("item: ", item);
//     return item.name.includes(searchText);
//   });
//   return todoRemaining;
// };

import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const searchTextSelector = (state) => state.filter.search;

export const todoRemaining = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) =>
    todoList.filter((item) => {
      return item.name.includes(searchText);
    })
);
