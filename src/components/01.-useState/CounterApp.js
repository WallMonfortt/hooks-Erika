import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
  const init = 50
  const [state, setState] = useState(init);

  const [counters, setCounters] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
    counter5: 50,
    counter6: 60,
  });

  const { counter1, counter2, counter3, counter5 } = counters;
  return (
    <div>
      <h1>CounterApp</h1>
      <hr/>

      <h2>counter : {state} </h2>

      <button
      className="btn btn-primary me-1"
       onClick={()=> {setState(state + 1)}}
      > +1 </button>

      <button
      className="btn btn-danger me-1"
       onClick={()=> {setState(state - 1)}}
      > -1 </button>

      <button
      className="btn btn-primary"
       onClick={()=> {setState(init)}}
      > reset </button>

      <hr/>
      <h2>counter1 : {counter1} </h2>
      <h2>counter2 : {counter2} </h2>
      <h2>counter3 : {counter3} </h2>
      <h2>counter5 : {counter5} </h2>

      <button
      className="btn btn-primary"
       onClick={()=> {setCounters({
         ...counters,
        counter2: counter2 + 1} )}}
      > +1 cotr 2 </button>


      <button
      className="btn btn-primary"
       onClick={()=> {setCounters({
         ...counters,
        counter5: counter5 + 5} )}}
      > +5 cotr 5 </button>
      <button
      className="btn btn-primary"
       onClick={()=> {setCounters({
         ...counters,
        counter5: counter5 - 5} )}}
      > -5 cotr 5 </button>
      <button
      className="btn btn-primary"
       onClick={()=> {setCounters({
         ...counters,
        counter5: 50} )}}
      > reset cotr 5 </button>


    </div>
  )
}







