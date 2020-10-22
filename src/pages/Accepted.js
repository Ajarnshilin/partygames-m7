import React from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/rockman.jpg'
import BannerBlock from '../components/BannerBlock'
import BoxAccepted from '../components/BoxAccepted'
import styled from 'styled-components'

const H1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-top: 70px;
`

function Accepted () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <H1>Party You've Accepted</H1>
        <BoxAccepted />
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Accepted)