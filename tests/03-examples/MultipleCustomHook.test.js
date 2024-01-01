import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHook';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en el MultipleCustomHook', () => { 

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });
    

    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render ( <MultipleCustomHook /> )

        screen.debug();
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText('Rick y Morty') );

        const nextButton = screen.getByRole('button', { name: 'Nueva URL' });
        expect( nextButton.disabled ).toBeTruthy();

     }) 



     test('Debe de mostrar una url', () => { 

        useFetch.mockReturnValue({
            data: [{name: 'Samuel', url: 'https://testing.com'}],
            isLoading: false,
            hasError: null
        });

        screen.debug();
        render ( <MultipleCustomHook /> )

        // expect( screen.getByText('Samuel')).toBeTruthy(); //todo: error
        
      })


      test('Debe de llamar la función de incrementar', () => { 

    
        useFetch.mockReturnValue({
            data: [{name: 'Samuel', url: 'https://testing.com'}],
            isLoading: false,
            hasError: null
        });

        
        render ( <MultipleCustomHook /> )
        const nextButton = screen.getByRole('button', { name: 'Nueva URL' });
        fireEvent.click( nextButton );

        expect(mockIncrement).toHaveBeenCalled();
       
       })


 })