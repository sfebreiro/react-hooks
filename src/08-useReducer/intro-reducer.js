
const initialState = [{
        id: 1,
        todo: 'Limpiar habitación',
        done: false
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

const newTodo = {
    id: 2,
    todo: 'Limpiar baño',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}

let todos = todoReducer( todos, addTodoAction );

