import React from 'react'
import { useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    color: #00805b;
  };
` 
const Title = styled.h1`
  color: #00805b;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.05rem;
  margin-bottom: 0rem;
`

const Subtitle = styled.h3`
  color: #00805b;
  font-weight: 100;
  text-align: center;
  padding: 0 2.5rem;
`

const Input = styled.input`
  color: #00805b;
  font-size: 1.3rem;
  background: none;
  border: none;
  border-bottom: 0.078rem solid #00cc92;
  margin: 2.5rem 0;
  width: 90%;
  display: block;
  ::placeholder {
    color: #00cc92;
    opacity: 1;
  };
  :focus {
    outline: none;
  };
`

const Validation = styled.p`
  color: #00805b;
  font-weight: 100;
  font-size: .75rem;
`

const Submit = styled.input`
  font-size: 1.3rem;
  background: none;
  color: #00805b;
  width: 75%;
  border-radius: 1.56rem;
  border: 0.078rem solid #00cc92;
  margin: 2.5rem;
  padding: .5rem;
  cursor: pointer;
  :hover {
    background-color: #00cc92;
  };
  :focus {
    outline: none;
    background-color: #00cc92;
  };
`
const Container = styled.div`
  max-width: 400px;
  margin: auto;
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
  const { register, handleSubmit, errors, reset } = useForm()

  const onSubmit = (data) => {
    reset()
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
          <Title>Almost There!</Title>
          <Subtitle>Create your new account to join the fun.</Subtitle>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Input
                  type='text'
                  name='username'
                  placeholder='username'
                  ref = {
                    register({
                      required: 'username required',
                      pattern: {
                        value: /^[a-z][a-z9]{3,14}$/i,
                        message: 'Username: must be 5 - 15 characters, must start with a letter, only alphanumeric characters allowed, only lowercase letters allowed'
                      }
                    })
                  }
                />
                {errors.username && <Validation><em>{errors.username.message}</em></Validation>}
              </div>
              <div>
                <Input
                  type='text'
                  name='email'
                  placeholder='email'
                  ref={register({ required: 'email required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, message: 'Username: must be 5 - 15 characters, must start with a letter, only alphanumeric characters allowed, only lowercase letters allowed' } })}
                />
                {errors.email && <Validation><em>{errors.email.message}</em></Validation>}
              </div>
              <div>
                <Input
                  type='password'
                  name='password'
                  placeholder='password'
                  ref = {
                    register({
                      required: 'password required',
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/i,
                        message: 'Password: must be 8 - 15 characters long, must contain one UPPERCASE letter, must contain one lowercase letter, must contain one number, must contain one special character: @$! % * ? &'
                      }
                    })
                  }
                />
                {errors.password && <Validation><em>{errors.password.message}</em></Validation>}
              </div>
              <Submit type='submit' value='Create Account' />
            </form>
        </Overlay>
      </Container>
    </div>
  );
}

export default Form
