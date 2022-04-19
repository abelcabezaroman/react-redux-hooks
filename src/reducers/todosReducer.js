export const initTodosReducer = ["Sacar al perro", "Aprender redux"]

export const todosReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODOS":
            return [...state, action.payload]
        default:
            return state;
    }
};
