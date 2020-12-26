import React from 'react'

const Accordion = () => {
  return (
    <div>
       <p>Rules for Inputs</p>
        <div>
          <p>username</p>
          <ul>
            <li>must be 5 - 15 characters long</li>
            <li>must start with a letter</li>
            <li>only alphanumeric characters allowed</li>
            <li>only lowercase letters allowed</li>
          </ul>
          <p>password</p>
          <ul>
            <li>must be 8 - 15 characters long</li>
            <li>must contain one UPPERCASE letter</li>
            <li>must contain one lowercase letter</li>
            <li>must contain one number</li>
            <li>must contain one special character: @$!%*?&</li>
          </ul>
        </div>
    </div>
  )
}

export default Accordion



