const initState = {
  filter: {
    search: "",
    status: "",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Do Redux Core", priority: "Medium", isComplete: false },
    { id: 2, name: "Learn Redux Toolkit", priority: "Low", isComplete: false },
    { id: 3, name: "Learn Redux Thunk", priority: "High", isComplete: false },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "addTodo": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "filter/searchText": {
      return { ...state, filter: { ...state.filter, search: action.payload } };
    }
    default:
      return { ...state };
  }
};

export default rootReducer;
