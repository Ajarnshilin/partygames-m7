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

const Textarea = styled.textarea`
    margin: 10px 0;
    padding: 5px 10px;
    height: 50px;
    border-radius: 5px;
    border:solid 1px gray;
    resize: none;
    outline: none;
    &:focus {
        border: 1px solid #0C1737;
    }
`

const Button = styled.button`
    height: 40px;
    width: 40%;
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
                <Title>Post</Title>
                <a for="title">Title</a>
                <Input class="input" type="text" name="username" id="username"></Input>

                <a for="details">Details</a>
                <Textarea class="input" type="text" name="password" id="password"></Textarea>

                <a for="partySize">Party Size</a>
                <Input class="input" type="text" name="password" id="password"></Input>

                <Submit>
                    <Button class="submit-login" type="submit">Post</Button>
                </Submit>

            </Form>
        </Container>
    )
}

export default FormLogin
