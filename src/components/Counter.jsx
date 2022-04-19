import React, { useContext } from "react";
import { StoreContext } from "../contexts/storeContext";

export default function Counter () {
    const { state, dispatch } = useContext(StoreContext);

    const valueRandom = () => {
        return Math.round(Math.random() * (1000 - 1) + 1);
    };

    return <div className="row counter-btns center-align">

        <p>{state.counter}</p>
        <button className="btn-small blue" onClick={() => { dispatch({ type: "INCREMENT_COUNTER" }); }}>
            INCREMENT
        </button>
        <button className="btn-small blue" onClick={() => { dispatch({ type: "DECREMENT_COUNTER" }); }}>
            DECREMENT
        </button>

        <button className="btn-small blue" onClick={() => { dispatch({ type: "MULTIPLY_COUNTER" }); }}>
            MULTIPLY
        </button>

        <button className="btn-small blue" onClick={() => { dispatch({ type: "SUBSTRACT_COUNTER" }); }}>
            SUBSTRACT
        </button>
        <button className="btn-small blue" onClick={() => { dispatch({ type: "RESET_COUNTER" }); }}>
            RESET
        </button>
        <button className="btn-small blue"
                onClick={() => { dispatch({ type: "SET_VALUE_COUNTER", payload: valueRandom() }) }}>
            VALUE RANDOM
        </button>
    </div>
}