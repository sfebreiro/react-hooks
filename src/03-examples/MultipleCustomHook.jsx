import { useCounter, useFetch } from '../hooks';
import { Block } from './components/Block';
import { Loading } from './components/Loading';

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, url } = !!data && data; 

    return (
        <>
            <h1>Rick y Morty</h1>
            <hr />

            {
                isLoading
                    ? <Loading />
                    : <Block name={ name } url={ url } />
            }

            <button 
                onClick={ () => increment() }
                disabled={ isLoading }
                className='btn btn-primary'>
                    Nueva URL
            </button>

        </>
    )
}
