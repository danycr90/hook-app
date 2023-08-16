
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../../src/09-useContext/LoginPage";
import { UserContext } from "../../../src/context/UserContext";

describe('Pruebas en <LoginPage />', () => { 

    const user = { 
        id: 123, 
        name: 'Juan Ramón',
        email: 'juan@gmail.com' 
    };    
    
    const setUserMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el componente sin el usuario', () => { 
       
        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        //screen.debug();
        
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );

    }); 

    test('debe de llamar el setUser cuando se hace click en el botón', () => { 

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const button = screen.getByLabelText('button');
        fireEvent.click(button);
        
        expect( setUserMock ).toHaveBeenCalledWith( user );
  
        //screen.debug();

    });
    
});