import React from 'react'

function Form() {
  return (
    <div>
      <form>
        <label>
         Email 
          <input type='text' name='user' />
        </label>
        <label>
          Password
          <input type='text' name='password' />
        </label>
        <input type='submit' name='submit' />
      </form>
    </div>
  )
}

export default Form;
