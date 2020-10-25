import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock'
import FormLogin from '../components/FormLogin'
// import { Title, Subtitle } from '../components/Typography'

function Login () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
      <FormLogin/>
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Login)