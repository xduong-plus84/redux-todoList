// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: 5, name: "Learn sth", isCompleted: false, priority: "Medium" },
// };

// action creator
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchTextChange = (text) => {
  return {
    type: "filter/searchText",
    payload: text,
  };
};
