import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch';

import './MultiplesHstyle.css'

export const MultiplesHooks = () => {

  const { counter, increment, decrement, reset } = useCounter(1);

  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  
  const { author, quote, quote_id} = !!data && data[0] 
  // ! !!data retorna false , probar en consola del navegador
  console.log(quote_id);
  console.log(!!data);
  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr/>

      {loading
       ?
        (<div className="alert alert-info text-center" >
          Loading...
          </div>
        )
      : 
        (<blockquote className="blockquote text-end" >
          <p className="mb-3" > { quote }</p>
          <footer className="blockquote-footer" > { author } </footer>
          </blockquote>
        )
      }

      {quote_id && <button 
      className="btn btn-primary" 
      onClick={ increment }
      >
        Next Quote
      </button>
       }

      {quote_id > 1 && <button 
      className="btn btn-secondary " 
      onClick={ decrement }
      >
        prev Quote
      </button>
       }

       {quote_id > 2 && <button 
      className="btn btn-danger" 
      onClick={ reset }
      >
        reset
      </button>
       }
             
    </div>
  )
}