import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dany',
        email: 'dany@gmail.com' 
    })  

    const { username, email } = formState;

    const onInputChange = ({ target })  => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);

    useEffect( () => {
        // console.log('useEffect formState called!');
    }, [ formState ]);

    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
    
            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
    
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="danycr2011@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'dany2') && <Message />
            }

        </>
      )
}
