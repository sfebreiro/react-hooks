import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';


jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp />', () => { 

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'TODO #1', done: false},
            { id: 2, description: 'TODO #2', done: true}
        ],
        todosCount: 2,
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    })
    

    test('Debe de mostrar el componente correctamente', () => { 

        render( <TodoApp /> );
        //screen.debug();

        expect( screen.getByText('TODO #1') ).toBeTruthy();
        expect( screen.getByText('TODO #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
        expect( screen.getByRole('textbox').className );


     });

 });