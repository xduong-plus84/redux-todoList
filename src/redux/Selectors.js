import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => {
  return state.todo;
};

export const filterSearchText = (state) => {
  return state.filter.search;
};

export const filterStatus = (state) => {
  return state.filter.status;
};

export const filterPriority = (state) => {
  return state.filter.priority;
};

export const todoListRemaining = createSelector(
  todoListSelector,
  filterSearchText,
  filterStatus,
  filterPriority,
  (todoList, searchText, status, arrPriority) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return (
          todo.name.includes(searchText) &&
          (arrPriority.length ? arrPriority.includes(todo.priority) : true)
        );
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.isComplete : !todo.isComplete) &&
        (arrPriority.length ? arrPriority.includes(todo.priority) : true)
      );
    });
  }
);
