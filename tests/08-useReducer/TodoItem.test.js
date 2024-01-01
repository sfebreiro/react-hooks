import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas en <TodoItem />', () => { 

    const todo = {
        id: 1,
        description: 'Hay que hacer esto',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );
    

    test('Debe de mostrar el todo pendiente de completar', () => { 
        
        render( <TodoItem 
                    todo={ todo} 
                    onToggleTodo={ onToggleTodoMock } 
                    onDeleteTodo={ onToggleTodoMock } 
                /> );
        
        const liElement = screen.getByRole('listitem');
        console.log(liElement.innerHTML);

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        

        const spanElement = screen.getByLabelText('span');
        console.log(spanElement.className);

        expect( spanElement.className ).toBe('align-self-center '); // Ojo con el espacio en blanco

     });


     test('Debe de mostrar el componente completado', () => { 

        todo.done = true;
        
        render( <TodoItem 
                    todo={ todo} 
                    onToggleTodo={ onToggleTodoMock } 
                    onDeleteTodo={ onToggleTodoMock } 
                /> );
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center text-success'); 

     });


     test('Span debe llamar el Toggle todo cuando se hace click', () => { 
        
        render( <TodoItem 
            todo={ todo} 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
        /> );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );


      });


      test('Botón debe llamar el Delete todo cuando se hace click', () => { 
        
        render( <TodoItem 
            todo={ todo} 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
        /> );

        const deleteElement = screen.getByLabelText('delete');
        fireEvent.click(deleteElement);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );


      });


 });