import { useCounter, useFetch } from '../hooks';
import { Block } from '../03-examples/components/Block';
import { Loading } from '../03-examples/components/Loading';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    const { name, url, species } = !!data && data; 
    

    return (
        <>
            <h1>Rick y Morty</h1>
            <hr />

            {
                isLoading
                    ? <Loading />
                    : <Block name={ name } species={ species } />
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
