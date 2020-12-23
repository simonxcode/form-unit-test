import React from 'react'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const Title = styled.h1`
  color: #fff;
  font-weight: 300;
  text-align: center;
`

const Subtitle = styled.h3`
  color: #fff;
  font-weight: 200;
  text-align: center;
`

const Input = styled.input`
  background: none;
  border: none;
  margin: 1rem;
`

const Validation = styled.p`
  color: red;
  margin-left: 1rem;
`

const Submit = styled.input`
  background: none;
  border: #fff;
  color: #fff;
  width: 100%;
  border-radius: 1.56rem;
  margin: 1rem 0;
`
const Container = styled.div`
  display: flex;
  border-radius: 1rem;
`
const Overlay = styled.div`
  background-image: linear-gradient(0deg, rgba(170, 255, 169, 1)11.2%, rgba(17, 255, 189, 1)91.1%);
  border-radius: .5rem;
  display: inline-block;
  padding: 1.5rem;
  margin: 0 auto;
`

function Form() {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)   
  }
  
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap" rel="stylesheet" />
      </Helmet>
      <Container>
        <GlobalStyle />
        <Overlay>
          <Title>Hello There</Title>
          <Subtitle>create your new account to join the fun</Subtitle>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  type='text'
                  name='username'
                  placeholder='username'
                  ref={register({ required: 'username required', pattern: { value: /^[a-z][a-z9]{3,14}$/i, message: 'invalid username' } })}
                />
                {errors.username && <Validation>{errors.username.message}</Validation>}
              </div>
              <div>
                <Input
                  type='text'
                  name='email'
                  placeholder='email'
                  ref={register({ required: 'email required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, message: 'invalid email address' } })}
                />
                {errors.email && <Validation>{errors.email.message}</Validation>}
              </div>
              <div>
                <Input
                  type='password'
                  name='password'
                  placeholder='password'
                  ref={register({ required: 'password required', pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/i, message: 'invalid password' } })}
                />
                {errors.password && <Validation>{errors.password.message}</Validation>}
              </div>
              <Submit type='submit' />
            </form>
          </div>
          <div>
            <button>Rules for input</button>
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
        </Overlay>
      </Container>
    </div>
  );
}

export default Form
