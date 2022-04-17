export const initCounterState = 0

export const counterReducer = (state, action) => {
    console.log('##ABEL## >>  >>  counterReducer', state);
    switch (action.type) {
        case "INCREMENT_COUNT":
            return state + 1
        case "DECREMENT_COUNT":
            return state - 1
        case "RESET_COUNT":
            return 0
        case "SET_VALUE_COUNT":
            return action.payload
        default:
            throw new Error("Unexpected action");
    }
};
