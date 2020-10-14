import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/rockman.jpg'
import BannerBlock from '../components/BannerBlock'
import { Title, Subtitle } from '../components/Typography'

function Login () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <Title>Login</Title>
        <Subtitle></Subtitle>
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Login)