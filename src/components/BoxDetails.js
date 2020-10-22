import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PubG from '../assets/games/pubg.jpg'

const Container = styled.div`
    height: 500px;
    width: 900px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
`

const Form = styled.form`
    width: 55%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    a {
        margin-top: 5px;
        font-size: 16px;
    }
    p {
        margin: 20px 0;
    }
`

const Title = styled.span`
    height: 50px;
    /* margin: 500px; */
    font-size: 2rem;
    color: #1E3859;
`

const Image = styled.div`
    width: 45%;
    height: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position-y: 40px; */
    border-radius: 10px 0 0 10px;
`

const Top = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
`

const Bottom = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    a {
        font-size: 30px;
        padding: 15px 35px;
        font-weight: bold;
        color: #707070;
    }
`

const Button = styled.button`
    width: 120px;
    height: 50px;
    background-color: #4678B0;
    border: 0;
    color: white;
    font-size: 25px;
    border-radius: 5px;
`

function BoxDetails() {
    return (
        <Container>
            <Image src={PubG}>
            </Image>
            <Form>
                <Top>
                    <Title>Title</Title>
                    <a>30/9/2563</a>
                    <a>Posted by Username</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis orci elit. Pellentesque euismod eu nunc placerat auctor. Fusce non arcu vitae nisl sodales dictum. Proin ac est mauris.</p>
                </Top>
                <Bottom>
                    <a>3/4</a>
                    <Button>
                        Join
                </Button>
                </Bottom>
            </Form>
        </Container>
    )
}

export default BoxDetails