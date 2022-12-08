const initState = [
  { id: 1, name: "Do Redux Core", priority: "Medium", isComplete: false },
  { id: 2, name: "Learn Redux Toolkit", priority: "Low", isComplete: true },
  { id: 3, name: "Learn Redux Thunk", priority: "High", isComplete: false },
];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todo/add": {
      console.log("action.payload: ", action.payload);
      return [...state, action.payload];
    }

    case "todo/done": {
      console.log("action.payload: ", action.payload);

      const cloneState = [...state];

      let index = cloneState.findIndex(
        (element) => element.id == action.payload
      );
      console.log("index: ", index);

      cloneState[index].isComplete = !cloneState[index].isComplete;
      state = cloneState;
      return [...state];
    }

    default:
      return [...state];
  }
};

export default todoReducer;
