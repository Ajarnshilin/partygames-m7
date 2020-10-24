import React from 'react'
import styled from 'styled-components'
import Overwatch from '../assets/games/ow.jpg'
import Apex from '../assets/games/apex.jpg'
import Minecraft from '../assets/games/mc.jpg'
import PUBG from '../assets/games/pubg.jpg'
import Valorant from '../assets/games/va.png'

const Games = styled.div`
    margin: 25px;
    box-shadow: black;
    box-shadow: 10px 10px 20px black;
    border-radius: 10px;
`

const Images = styled.div`
    width: 320px;
    height: 300px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0 0;
    transition: .5s ease;
    cursor: pointer;
    &:hover{
    opacity: 0.5;
    }
`

const Details = styled.div`
    width: 320px;
    height: 110px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0 0 10px 10px;
    p {
    color: black;
    padding: 5px 10px;
    color: gray;
    }
    h3 {
    width: fit-content;
    margin: 0;
    padding: 5px 10px;
    color: #4678B0;
    font-weight: bold;
    cursor: pointer;
    &:hover {
    text-decoration: underline;

    }
    }
    h2 {
    margin: 0;
    padding: 5px 0;
    }
`

const DetailsLeft = styled.div`
    width: 200px;
    padding: 10px 0;
    p {
        font-size: 15px;
    }
`

const DetailsRight = styled.div`
    width: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
    color: black;
    font-weight: bold;
    }
    button {
    border: none;
    color: white;
    padding: 5px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #57A4CC;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    z-index: 99;
    &:hover {
    background-color: #1E3859;
    }
    }
`

export function Content(props) {
  let image_src = ''

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
            <Games>
                <Images src={image_src} height={props.height}>
                  {props.children}
                </Images>
                <Details>
                    <DetailsLeft>
                        <h3>{props.title}</h3>
                        <p>{props.user}</p>
                        <p>{props.date}</p>
                    </DetailsLeft>
                    <DetailsRight>
                    <h2>
                      1/{props.party}
                      </h2>
                        <button>JOIN</button>
                    </DetailsRight>
                </Details>
            </Games>
    )
}

// export default Content