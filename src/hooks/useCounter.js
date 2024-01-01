import { useState } from 'react';


export const useCounter = ( initialValue = 10 ) => {

    const [ counter, setCounter ] = useState( initialValue );

    const increment = ( value = 1 ) => {   // value
        setCounter( (current) => counter + value ); //(current) => para tomar el valor actual en el testing
    }

    const decrease = ( value = 1 ) => {
        setCounter( (current) => counter - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter, // counter: counter
        increment,
        decrease,
        reset
    }

}