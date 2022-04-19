import React, { useReducer } from "react";

const initState = 0;

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;
    case "DECREMENT_COUNTER":
      return state - 1;
    case "RESET_COUNTER":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

export default function SimpleCounter() {
  // const [state, setState] = useState(initState);
  const [state, dispatch] = useReducer(counterReducer, initState);

  return (
    <div className="row counter-btns center-align">
      <p>{state}</p>
      <button
        className="btn-small blue"
        onClick={() => {
          dispatch({ type: "INCREMENT_COUNTER" });
        }}
      >
        INCREMENT
      </button>
      <button
        className="btn-small blue"
        onClick={() => {
          dispatch({ type: "DECREMENT_COUNTER" });
        }}
      >
        DECREMENT
      </button>
      <button
        className="btn-small blue"
        onClick={() => {
          dispatch({ type: "RESET_COUNTER" });
        }}
      >
        RESET
      </button>
    </div>
  );
}
