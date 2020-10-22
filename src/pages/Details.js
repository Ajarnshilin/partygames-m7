import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/rockman.jpg'
import BannerBlock from '../components/BannerBlock'
import BoxDetails from '../components/BoxDetails'

function Login () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <BoxDetails />
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Login)