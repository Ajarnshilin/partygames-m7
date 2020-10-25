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
    height: 150px;
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

function FormLogin() {
    return (
        <Container>
            <Form>
                <Title>Post</Title>
                <a>Title</a>
                <Input type="text" placeholder="What are you playing?"></Input>

                <a>Details</a>
                <Textarea type="text" placeholder="Tell people more about your party's game style"></Textarea>

                <a>Party Size</a>
                <Input type="number" placeholder="The number of member you need"></Input>

                <Submit>
                    <Button type="submit">Post</Button>
                </Submit>

            </Form>
        </Container>
    )
}

export default FormLogin
