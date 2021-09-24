import React, { useEffect, useState } from 'react'
import './form.css'
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email} =formState;

  useEffect(() => {
    console.log("Hola Erika");
  }, [])

  useEffect(() => {
    console.log("Hola de nuevo Erika");
  }, [formState])

  useEffect(() => {
    console.log("Hola de nuevo Erika aqui toy");
  }, [email])

  useEffect(() => {
    console.log("Adios vaquero");
  }, [name])

  const handleInputChange = ({target}) => {
    console.log(target.value);
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }
  return (
    <div>
      <h1>Simple Form</h1>
      <hr/>

      <div>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Escribe tu nombre"
          autoComplete="off"
          value={name}
          onChange={ handleInputChange }
        />
        
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Escribe tu email por favor"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
      </div>

      {(name === '123') && <Message /> }
    </div>
  )
}
