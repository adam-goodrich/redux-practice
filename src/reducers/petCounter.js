const petCounter = (state = 10, action) => {
  switch (action.type) {
    case "PET_COUNTER_INCREMENT":
      return state + action.payload;
    case "PET_COUNTER_DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default petCounter;
