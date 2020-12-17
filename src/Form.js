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
      create your account
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            type='text'
            name='username'
            placeholder='username'
            ref={register({ required: 'username required', pattern: {value: /^[a-z][a-z9_]{3,14}$/i, message: 'invalid username'} })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
          <input 
            type='text' 
            name='email' 
            placeholder='email'
            ref={register({ required: 'email required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, message: 'invalid email address'} })} 
            />
          {errors.email && <p>{errors.email.message}</p>}
        <div>
          <input 
            type='password'
            name='password' 
            placeholder='password'
              ref={register({ required: 'password required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/i, message: 'invalid password'} })} 
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
