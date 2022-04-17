import { counterReducer, initCounterState } from './counterReducer'

const rootReducer = (state, action) => {
    return {
        counter: counterReducer(state.counter, action)
    }
};

const initRootState = {
    counter: initCounterState
}

export { rootReducer, initRootState};
