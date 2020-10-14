import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/rockman.jpg'
import BannerBlock from '../components/BannerBlock'
import { Title, Subtitle } from '../components/Typography'

function Register () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <Title>About</Title>
        <Subtitle></Subtitle>
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(About)