import { useState } from "react"

export const useCounter = ( initialState = 5) => {
  const [counter, setCounter] = useState(initialState);

  const increment = (i = 1) =>{
    setCounter( counter + i);
  }

  const decrement = (i = 1) =>{
    setCounter( counter - i);
  }

  const reset = () =>{
    setCounter( initialState );
  }
  return {
    counter,
    increment,
    decrement,
    reset
  }
}
