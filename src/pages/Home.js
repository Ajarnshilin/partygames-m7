import React from 'react'
import styled from 'styled-components'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/rockman.jpg'
import HomeBlock from '../components/HomeBlock'
import { Title, Subtitle } from '../components/Typography'
import Content from '../components/Content'
import Overwatch from '../assets/games/ow.jpg'
import Minecraft from '../assets/games/mc.jpg'
import PubG from '../assets/games/pubg.jpg'
import Apex from '../assets/games/apex.jpg'
import Va from '../assets/games/va.png'
import { Link } from 'react-router-dom'

const PostList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 50px;
    a {
    text-decoration: none;
    }
`

const Post = styled.button`
    width: 110px;
    height: 40px;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    background-color: #4678B0;
    border-radius: 10px;
    outline: none;
    margin-top: 20px;
    &:hover{
    background-color: #1E3859;
    }
`

const Center = styled.div`
  margin: 70px 0 0 150px;
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
`

function Home() {
  return (
    <>
      <HomeBlock src={backgroundImage}>
        <Center>
        <Title>PartyGames</Title>
        <Subtitle>You are not limited to the features of this template. It is suitable for gaming
        site, and for any business project. Pre-packed demos will help you to quickly
        run your new creative website.</Subtitle>
        <Post><Link to='/Post'>POST</Link></Post>
        </Center>
      </HomeBlock>
      <PostList>
        <Content src={Overwatch}></Content>
        <Content src={Minecraft}></Content>
        <Content src={PubG}></Content>
        <Content src={Apex}></Content>
        <Content src={Va}></Content> 
      </PostList>
    </>
  )
}
export default withHelmet('PartyGames')(Home)
