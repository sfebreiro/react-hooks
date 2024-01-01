import { useCounter } from '../hooks/useCounter';

useCounter
export const CounterWithCustomHooks = () => {

    const { counter, increment, decrease, reset } = useCounter();

  return (
    <>
        <h1>Counter with Hook: { counter } </h1>

        <hr />

        <button className='btn btn-primary' onClick={ () => increment(2) } >+1</button>
        <button className='btn btn-primary' onClick={ reset } >Reset</button>
        <button className='btn btn-primary' onClick={ () => decrease(2)  } >-1</button>

    </>
  )
}
