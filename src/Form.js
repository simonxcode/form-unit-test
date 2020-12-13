import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit } = useForm()

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
          <input type='text' placeholder='jondoe@gmail.com' name='email' ref={register} />
          <div>
            <input type='password' name='password' ref={register} />
            <a href='/' >forgot password?</a>
          </div>
          <input type='submit' />
        </form>
        <div>
          <a href='/' >New here? Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default Form
