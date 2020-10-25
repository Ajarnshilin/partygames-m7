import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import HomeBlock from '../components/HomeBlock'
import { Title, Subtitle } from '../components/Typography'
import { Content } from '../components/Content'
import Overwatch from '../assets/games/ow.jpg'
import Minecraft from '../assets/games/mc.jpg'
import PubG from '../assets/games/pubg.jpg'
import Apex from '../assets/games/apex.jpg'
import Va from '../assets/games/va.png'
import { Link } from 'react-router-dom'
import { getData } from '../services/fetchData'
import { O_WRONLY } from 'constants'
import Lottie from 'react-lottie';
import animationData from '../lotties/scroll-down';

const PostList = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 100px 50px;
    a {
    text-decoration: none;
    }
`

const Post = styled.button`
    width: 110px;
    padding: 10px 0;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
    background-color: yellow;
    border-radius: 30px;
    outline: none;
    margin-top: 20px;
    &:hover{
    background-color: white;
    }
`

const Center = styled.div`
  height: 300px;
  width: 700px;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 120px;
`

const Bottom = styled.div`
  height: 170px;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const ScrollDown = styled.button`
  font-size: 30px;
  padding: .5rem 1rem;
  background-color: transparent;
  border: none;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
  transition: background-color .3s;

  text-transform: uppercase;

  &:visited {
    color: #fff;
  }
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function Home() {
  const [data , setData] = useState([])
  const [user, setUser] = useState([])
  const [date, setDate] = useState([])

  useEffect (() => {
    getData('posts').then(response => setData(response))
    getData('clients').then(response => setUser(response))
    setDate(data.user_timestamps)
  },[])

  console.log(data)
  return (
    <>
      <HomeBlock src={backgroundImage}>
        <Center>
          <Title>Party Games</Title>
          <Subtitle>You are not limited to the features of this template. It is suitable for gaming
          site, and for any business project. Pre-packed demos will help you to quickly
        run your new creative website.</Subtitle>
        </Center>
        <Bottom>
          <Post><Link to='/Post'>POST</Link></Post>
          <ScrollDown as='a' href='#content'><Lottie
          options={defaultOptions}
          height={100}
          width={100}
        /></ScrollDown>
        </Bottom>
      </HomeBlock>
      <PostList id="content">
        {data.map((item, index) => (
          <div key={index}>
            {user.filter(postUserId => postUserId.user_id === item.user_id).map((userItem, userIndex) => (
              <Link to={`Details/${item.post_id}`}>
                <Content key={userIndex} src={item.title} title={item.title} user={userItem.username} date={item.date} party={item.party_size}></Content>
              </Link>
            ))}
          </div>
        ))}
        {/* <Content src={Overwatch}></Content>
        <Content src={Minecraft}></Content>
        <Content src={PubG}></Content>
        <Content src={Apex}></Content>
        <Content src={Va}></Content>  */}
      </PostList>
    </>
  )
}
export default withHelmet('PartyGames')(Home)
