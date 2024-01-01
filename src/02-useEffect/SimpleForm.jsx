import { useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'Goku',
        email: 'samuel@prueba.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {   // event.target
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value                   // asociamos el valor que se cambia al cada campo name 
        });
    }


    useEffect(() => {

    }, []);


    return (
        <>
            <h1> Simple Form </h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            >

            </input>

            <input
                type="email"
                className="form-control mt-2"
                placeholder="samuel@prueba.com"
                name="email"
                value={email}
                onChange={onInputChange}
            >

            </input>

            {
                (username === 'Goku') && <Message />
            }

        </>
    )
}
