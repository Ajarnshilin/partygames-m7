import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock'
import FormPost from '../components/FormPost'

function Post () {
    return (
      <div>
        <BannerBlock src={backgroundImage}>
            <FormPost/>
        </BannerBlock>
      </div>
    )
  }

  export default withHelmet('PartyGames')(Post)
  