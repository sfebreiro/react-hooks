import { todoReducer } from '../../src/08-useReducer/todoReducer';


describe('Pruebas en el todoReducer', () => { 


    const initialState = [{
        id: 1,
        description: 'todo this',
        done: false
    }];
    

    test('Debe de regresar al estado inicial', () => { 
        
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);

     });


     test('Debe de agregar un todo', () => { 
        
        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'Do that',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

      });


      test('Debe de eliminar un todo', () => { 
        
        const action = {
            type: 'Remove Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);


       })


       test('Debe de realizar el toggle del todo', () => { 
        
        const action = {
            type: 'Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = todoReducer(initialState, action);
        expect(newState2[0].done).toBe(false);



       })


 });