export const addTodo = (data) => {
  return {
    type: "addTodo",
    payload: data,
  };
};

export const filterSearchChange = (data) => {
  return {
    type: "filter/searchText",
    payload: data,
  };
};
