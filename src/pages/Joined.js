import React, { useState, useEffect } from 'react'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock'
import BoxJoined from '../components/BoxJoined'
import { getDataById } from '../services/fetchData'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const H1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-top: 70px;
`

function Joined () {
  const [data, setData] = useState([])
  const [user, setUser] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getDataById('posts',id).then(response => setData(response))
    getDataById('clients',id).then(response => setUser(response))
  },[])
  
  console.log(data)
  console.log(user)

  return (
    <div>
      <BannerBlock src={backgroundImage}>
        <H1>Party You've Joined</H1>
        <BoxJoined src={data.title} title={data.title} user={user.username} party={data.party_size} details={data.details} date={data.date}/>
      </BannerBlock>
    </div>
  )
}
export default withHelmet('PartyGames')(Joined)