import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import RegisterAPI from '../services/registerAPI'

const Container = styled.div`
    height: 600px;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
`

const Form = styled.form`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    a {
        margin-top: 5px;
        font-size: 16px;
    }
`

const Title = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    /* margin: 500px; */
    font-size: 2rem;
    color: #1E3859;
`

const Input = styled.input`
    margin: 10px 0;
    padding: 5px 10px;
    height: 30px;
    border-radius: 5px;
    border: none;
    border:solid 1px gray;
    outline: none;
    &:focus {
        border: 1px solid #0C1737;
    }
`

const Textarea = styled.textarea`
    height: 150px;
    margin: 10px 0;
    /* padding: 5px 10px; */
    border-radius: 5px;
    border: none;
    border:solid 1px gray;
    outline: none;
    resize: none;
    padding: 5px 10px;
    &:focus {
        border: 1px solid #0C1737;
    }
`

const Button = styled.button`
    height: 45px;
    width: 110px;
    background-color: #4678B0;
    margin-top: 30px;
    border: 0;
    color: white;
    font-size: 20px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    background-color: #1E3859;
    }
`

const Submit = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    a {
    width: 100%;
    font-size: 16px;
    margin: 20px 0;
    }
`

const Register = styled.button`
    border: none;
    background-color: unset;
    font-size: 16px;
    color: #4678B0;
    cursor: pointer;
    outline: none;
`

function FormRegister(callback) {

  const [values, setValues] = useState({
    username:'',
    email:'',
    password:'',
    contact:''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values,"1")
    RegisterAPI(values)
    // console.log(values)
  };

  useEffect(
    () => {
      if (isSubmitting) {
        callback();
      }
    },
    []
  );


    return (
      <Container>
        <Form onSubmit={handleSubmit} method="POST" action="{{route('/login')}}">
            <Title>Register</Title>

            <a>Username</a>
            <Input 
              type ="text" 
              name="username" 
              id="username" 
              placeholder="e.g. JohnDoe"
              value={values.username} 
              onChange={handleChange}>
            </Input>

            <a>Email</a>
            <Input 
              type ="text" 
              name="email" 
              id="email" 
              placeholder="e.g. JohnDoe@example.com"
              value={values.email}
              onChange={handleChange}>
            </Input>

            <a>Password</a>
            <Input 
              type ="password" 
              name="password" 
              id="password" 
              placeholder="Password"
              value={values.password}
              onChange={handleChange}>
            </Input>

            <a>Confirm Password</a>
            <Input 
              type ="password" 
              name="comfirmPassword" 
              id="comfirmPassword" 
              placeholder="Type your password again">
            </Input>

            <a>Contact</a>
            <Textarea
              type ="text"
              name="contact" 
              placeholder="Leave contact for your party"
              value={values.contact}
              onChange={handleChange}>
            </Textarea>

            <Submit>
            <Button type ="submit">Submit</Button>
            <a>Already have an account? | <Register><Link to='/Login'>Login</Link></Register></a>
            </Submit>

        </Form>
        </Container>
    )
}

export default FormRegister
