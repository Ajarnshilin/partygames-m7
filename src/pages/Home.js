import React from 'react'
import styled from 'styled-components'
import withHelmet from '../util/withHelmet'
import BannerBlock from '../components/BannerBlock'

const Content = styled.div`
  padding: 8rem;
`

function Home () {
  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <Title>PartyGames</Title>
        <Subtitle></Subtitle>
      </BannerBlock>
      <Content>Home Page</Content>
    </div>
  )
}
export default withHelmet('PartyGames')(Home)
