import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <h1>
      Please Sign In
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            type='text'
            name='firstName'
            placeholder='first name'
            ref={register({ required: 'first name required' })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <input 
            type='text'
            name='lastName'
            placeholder='last name'
            ref={register({ required: 'last name required' })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
          <input 
            type='text' 
            name='email' 
            placeholder='name@email.com'
            ref={register({ required: 'email required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'invalid email address'} })} 
            />
          {errors.email && <p>{errors.email.message}</p>}
        <div>
          <input 
            type='password'
            name='password' 
            placeholder='password'
            ref={register({ required: 'password required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i, message: 'invalid password'} })} 
            />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <input type='submit' />
        </form>
      </div>
    </div>
  );
}

export default Form
