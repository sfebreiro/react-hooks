import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        <>
            <h1> Form With Custom Hook </h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            >

            </input>

            <input
                type="email"
                className="form-control mt-2"
                placeholder="samuel@prueba.com"
                name="email"
                value={email}
                onChange={ onInputChange }
            >

            </input>

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={ onInputChange }
            >

            </input>

            <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
            

        </>
    )
}
