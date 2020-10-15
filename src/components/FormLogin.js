import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 500px;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = styled.form`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Title = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    /* margin: 500px; */
    font-size: 3rem;
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
    height: 30px;
    width: 100%;
    background-color: #57A4CC;
    margin-top: 20px;
    border: 0;
    color: white;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    background-color: #1E3859;
    }
`

const Register = styled.button`
    height: 30px;
    width: 100%;
    color: #57A4CC;
    background-color: #ece3da;
    margin-top: 20px;
    border: 0;
    color: white;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: gray;
    }
`

const Submit = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &a {
    margin-top: 20px;
    height: 30px;
    width: 100%;
    color: unset;
    text-decoration: none;
    }
`

function FormLogin() {
    return (
        <Container>
            <Form class="form" method="POST" action="{{route('/login')}}">
                <Title>Login</Title>
                <a for="username">Username</a>
                <Input class="input" type="text" name="username" id="username" placeholder="e.g. JohnDoe"></Input>

                <a for="password">Password</a>
                <Input class="input" type="password" name="password" id="password" placeholder="********"></Input>

                <Submit>
                    <Login class="submit-login" type="submit">LOGIN</Login>
                    <Register class="submit-register" type="button" onClick="../pages/Register.js">REGISTER</Register>
                </Submit>

            </Form>
        </Container>
    )
}

export default FormLogin
