import React from 'react'
import { useForm } from '../../hooks/useForm'
import './form.css'

export const FormWithCustomHook = () => {
  
  const [formValues, handleInputChange] = useForm({
    name: 'Erika',
    email:'Erika@gmail.com',
    password: '123'
  })

  const {name, email, password} = formValues;

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formValues);
  }
  return (
    <div>
      <h1>Form With Custom Hook</h1>
      <hr/>

      <form onSubmit={handleSubmit}>
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
          placeholder="Escribe tu email"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
      <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Escribe tu contraseña"
          autoComplete="off"
          value={password}
          onChange={ handleInputChange }
        />

        <button type="submit">button</button>
      </form>


    </div>
  )
}
