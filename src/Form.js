import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='jondoe@gmail.com' name='email' ref={register} />
      <input type='password' name='password' ref={register} />
      <input type='submit' />
    </form>
  );
}

export default Form
