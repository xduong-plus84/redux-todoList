import { createSelector } from "reselect";

export const todoListSelector = (state) => {
  return state.todoList;
};

export const filterSearchText = (state) => {
  return state.filter.search;
};

export const todoListRemaining = createSelector(
  todoListSelector,
  filterSearchText,
  (todoList, searchText) => {
    return todoList.filter((item) => item.name.includes(searchText));
  }
);
