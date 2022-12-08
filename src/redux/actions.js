export const addTodo = (data) => {
  console.log("data: ", data);
  return {
    type: "todo/add",
    payload: data,
  };
};

export const doneTodo = (id) => {
  return {
    type: "todo/done",
    payload: id,
  };
};

export const filterSearchChange = (data) => {
  return {
    type: "filter/searchText",
    payload: data,
  };
};

export const filterStatusChange = (status) => {
  return {
    type: "filter/status",
    payload: status,
  };
};

export const filterPriorityChange = (arrPriority) => {
  return {
    type: "filter/priority",
    payload: arrPriority,
  };
};
