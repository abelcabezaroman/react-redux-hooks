export const initCounterState = 0;

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    case "MULTIPLY_COUNTER":
      return state * 2;
    case "SUBSTRACT_COUNTER":
      return state / 2;
    case "DECREMENT_COUNTER":
      return state - 1;
    case "RESET_COUNTER":
      return 0;
    case "SET_VALUE_COUNTER":
      return action.payload;
    default:
      return state;
  }
};
