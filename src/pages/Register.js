import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock'
// import { Title, Subtitle } from '../components/Typography'
import FormRegister from '../components/FormRegister'

function Register () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
      <FormRegister/>
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Register)
