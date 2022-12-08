const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "filter/searchText": {
      return { ...state, search: action.payload };
    }
    case "filter/status": {
      console.log(" action.payload : ", action.payload);
      return { ...state, status: action.payload };
    }
    case "filter/priority": {
      console.log(" action.payload : ", action.payload);
      return { ...state, priority: action.payload };
    }

    default:
      return { ...state };
  }
};

export default filterReducer;
