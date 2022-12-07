const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn Yoga", isCompleted: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", isCompleted: true, priority: "Low" },
    { id: 3, name: "Learn JavaScript", isCompleted: false, priority: "High" },
  ],
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case "filter/searchText": {
      return {
        ...state,
        filter: { ...state.filter, search: action.payload },
      };
    }
    default:
      return {
        ...state,
      };
  }
};
