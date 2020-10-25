import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock'
import BoxDetails from '../components/BoxDetails'
import styled from 'styled-components'

const H1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-top: 70px;
`

function Posted () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <H1>Party You've Posted</H1>
        <BoxDetails />
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Posted)