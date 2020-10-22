import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 500px;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
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
    height: 100px;
    /* margin: 500px; */
    font-size: 2rem;
    color: #1E3859;
`

const Input = styled.input`
    margin: 10px 0;
    padding: 0 10px;
    height: 30px;
    border-radius: 5px;
    border: none;
    border:solid 1px gray;
    outline: none;
    &:focus {
        border: 1px solid #0C1737;
    }
`

const Login = styled.button`
    height: 45px;
    width: 110px;
    background-color: #4678B0;
    margin: 30px;
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
    height: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    a {
    width: 100%;
    font-size: 16px;
    margin: 50px 0;
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

function FormLogin() {
    return (
        <Container>
            <Form>
                <Title>Sign In</Title>
                <a>Username</a>
                <Input type="text" name="username" id="username" placeholder="e.g. JohnDoe"></Input>

                <a>Password</a>
                <Input type="password" name="password" id="password" placeholder="**********"></Input>

                <Submit>
                    <Login type="submit">Sign In</Login>
                    <a>Doesn't have an account? | <Register><Link to='/Register'>Sign Up</Link></Register></a>
                </Submit>

            </Form>
        </Container>
    )
}

export default FormLogin
