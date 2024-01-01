import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter'; 


describe('Pruebas en el useCounter', () => { 
    
    test('Debe de retornar los valores por defecto', () => { 
        
        const { result } = renderHook( () => useCounter() );
        // console.log(result);
        const { counter, increment, decrease, reset } = result.current;

        expect(counter).toBe(10);
        expect(increment).toEqual(expect.any( Function ));
        expect(decrease).toEqual(expect.any( Function ));
        expect(reset).toEqual(expect.any( Function ));

     })


     test('Counter debe retornar el valor de 100', () => { 
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect(counter).toBe(100);

      })


      test('Debe de incrementar el contador', () => { 
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, increment } = result.current;

        act( () =>{
            //increment(1);
            increment(2);
        });

        expect(result.current.counter).toBe(102); // Si llamo al counter desestructurado, toma el valor de ese momento, que es 100

       })


       test('Debe de decrementar el contador', () => { 
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrease } = result.current;

        act( () =>{
            decrease(2);
            console.log(result.current.counter);
            decrease(4);
            console.log(result.current.counter);

        });

        expect(result.current.counter).toBe(94); 


       })


       test('Debe de resetear el contador', () => { 
        
        const { result } = renderHook( () => useCounter(100) );
        const { counter, decrease, reset } = result.current;

        act( () =>{
            decrease(4);
            decrease(4);
            reset();
        });

        expect(result.current.counter).toBe(100);

       })

 })