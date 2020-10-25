import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock'
import BoxProfile from '../components/BoxProfile'

function Post () {
    return (
      <div>
        <BannerBlock src={backgroundImage}>
            <BoxProfile/>
        </BannerBlock>
      </div>
    )
  }

  export default withHelmet('PartyGames')(Post)
  