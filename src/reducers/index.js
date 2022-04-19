import { counterReducer, initCounterState } from './counterReducer'
import { initTodosReducer, todosReducer } from './todosReducer';

const rootReducer = (state, action) => {
    return {
        counter: counterReducer(state.counter, action),
        todos: todosReducer(state.todos, action)
    }
};

const initRootState = {
    counter: initCounterState,
    todos: initTodosReducer
}

export { rootReducer, initRootState};
