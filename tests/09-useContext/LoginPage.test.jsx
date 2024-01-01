import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';


describe('Pruebas en <Login />', () => { 
    

    test('Debe de mostrar el componente sin el usuario', () => { 
        
        render( 
            <UserContext.Provider value={{ user: null }} >
                <LoginPage />
            </UserContext.Provider>
            )

        screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe("null");

     });


     test('Debe de llamar setUser cuando se hace click en el botón', () => { 

        const setUserMock = jest.fn();  
        
        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }} >
                <LoginPage />
            </UserContext.Provider>
            )

        
        const button = screen.getByRole('button');
        fireEvent.click( button );
        expect( setUserMock ).toHaveBeenCalledWith({"email": "sara@sara.com", "id": 1, "name": "Sara"});


     });


 });