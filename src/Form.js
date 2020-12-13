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
          <input 
            type='text' 
            name='email' 
            placeholder='name@email.com'
            ref={register({ required: 'email required' })} 
            />
          {errors.email && <p>email required</p>}
          <div>
            <input 
              type='password'
              name='password' 
              placeholder='password'
              ref={register({ required:'password required', minLength: {value: 8, message: 'password too short'} })} 
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
