import React from 'react'
import styled from 'styled-components'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/rockman.jpg'
import BannerBlock from '../components/BannerBlock'
import { Title, Subtitle } from '../components/Typography'
import Content from '../components/Content'

const PostList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 50px 0;
    & a {
    text-decoration: none;
    }
`

function Home () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <Title>PartyGames</Title>
        <Subtitle></Subtitle>
      </BannerBlock>
      <PostList>
        <Content></Content>
        <Content></Content>
        <Content></Content>
      </PostList>
    </div>
  )
}
export default withHelmet('PartyGames')(Home)
