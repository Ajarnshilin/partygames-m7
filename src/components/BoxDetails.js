import React from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import Overwatch from '../assets/games/ow.jpg'
import Apex from '../assets/games/apex.jpg'
import Minecraft from '../assets/games/mc.jpg'
import PUBG from '../assets/games/pubg.jpg'
import Valorant from '../assets/games/va.png'

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
    background-position: center;
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
    outline: none;
    cursor: pointer;
    :hover{
        background-color: #1E3859;
    }
`

function BoxDetails(props) {
  const { id } = useParams()
  let image_src =''

  switch(props.src) {
    case'Overwatch':
    image_src = Overwatch
    break
    case'Apex':
    image_src = Apex
    break;
    case'Minecraft':
    image_src = Minecraft
    break;
    case'PUBG':
    image_src = PUBG
    break;
    case'Valorant':
    image_src = Valorant
    break;
  }
    return (
        <Container>
            <Image src={image_src}>
            </Image>
            <Form>
                <Top>
                    <Title>{props.title}</Title>
                    <a>{props.date}</a>
                    <a>{props.user}</a>
                    <p>{props.details}</p>
                </Top>
                <Bottom>
                    <a>1/{props.party}</a>
                    <Link to={`/Accepted/${id}`}>
                      <Button>
                          Join
                      </Button>
                    </Link>
                </Bottom>
            </Form>
        </Container>
    )
}

export default BoxDetails
