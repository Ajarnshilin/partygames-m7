import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useLogin } from '../contexts/ActionContext'

const Container = styled.div`
    height: 500px;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

const Form = styled.form`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Top = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    a {
        margin: 10px 0;
    }
`

const Space = styled.div`
    display: flex;
    justify-content: space-between;
`

const Edit = styled.button`
    border: none;
    background-color: unset;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    color: #1E3859;
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

const Button = styled.button`
    height: 35px;
    width: 80%;
    background-color: #4678B0;
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
    justify-content: center;
    padding-bottom: 50px;
    a {
    margin-top: 20px;
    height: 30px;
    width: 100%;
    color: unset;
    text-decoration: none;
    }
`

function FormLogin() {
  const [{ isLogin, currentUsername}] = useLogin()

    return (
        <Container>
            <Form>
                <Top>
                    <Title>Profile</Title>
                    <Space>
                    {!isLogin ? <a>Username</a> : (currentUsername? currentUsername : '')}
                    </Space>
                </Top>

                <Submit>
                    <Button type="submit"><Link to='/Posted'>Party you have posted</Link></Button>
                    <Button type="submit"><Link to='/Joined'>Party you have joined</Link></Button>
                    <Button type="submit"><Link to='/Accepted'>Party you are accepted</Link></Button>
                </Submit>

            </Form>
        </Container>
    )
}

export default FormLogin
