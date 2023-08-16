import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('Pruebas en el useForm', () => { 

    const initialForm = {
        name: 'Dany',
        email: 'dany@google.com'
    }

    test('debe de regresar los valores por defecto', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current ).toEqual({
              name: initialForm.name,
              email: initialForm.email,
              formState: initialForm,
              onInputChange: expect.any( Function ),
              onResetForm: expect.any( Function )
            })
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newName = 'Juan'; 
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            /* fire events that update state */
            const target = {
                name: 'name',
                value: newName
            };
            onInputChange({target});
        });

        expect( result.current.name ).toBe( newName );
        expect( result.current.formState.name ).toBe( newName );

    });


    test('debe de realizar el reset del formulario', () => {
        const newName = 'Juan'; 
        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            /* fire events that update state */
            const target = {
                name: 'name',
                value: newName
            };
            onInputChange({target});
            onResetForm();
        });

        console.log(result.current);

        expect( result.current.name ).toBe( initialForm.name );
        expect( result.current.formState.name ).toBe( initialForm.name );

    });

    

});