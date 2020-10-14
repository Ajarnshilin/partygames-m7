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
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    flex-direction: column;
    & a {
        margin: 5px 0;
    }
`

const Title = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    /* margin: 500px; */
    font-size: 2rem;
`

const Button = styled.button`
    height: 35px;
    width: 100%;
    background-color: #57A4CC;
    margin-top: 20px;
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
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding-bottom: 50px;
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
                <Top>
                    <Title>Profile</Title>
                    <a for="username">Username</a>
                    <a for="contact">Contacts</a>
                    <a for="email">Email</a>
                </Top>

                <Submit>
                    <Button class="submit-login" type="submit">Party You've Posted</Button>
                    <Button class="submit-login" type="submit">Party You've Joined</Button>
                </Submit>

            </Form>
        </Container>
    )
}

export default FormLogin
