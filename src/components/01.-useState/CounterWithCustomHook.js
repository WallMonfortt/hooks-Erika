import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'


export const CounterWithCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter(10);
  
  return (
    <div>
      <h1>CounterWithCustomHook</h1>
      <hr/>
      <h1>counter with custom Hoook: {counter}</h1>
      
      <hr/>
      <button className="btn btn-danger" onClick={()=> increment(100)}> + </button>
      <button className="btn btn-alert-warning" onClick={()=> decrement(100)}> - </button>
      <button className="btn btn-dark" onClick={reset}> reset </button>
    </div>
  )
}
