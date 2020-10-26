import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'
import withHelmet from '../util/withHelmet'
import backgroundImage from '../assets/background.gif'
import BannerBlock from '../components/BannerBlock' 
import { Content } from '../components/Content'
import { Link } from 'react-router-dom'
import { getData } from '../services/fetchData'


const H1 = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PostList = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 100px 50px;
    a {
    text-decoration: none;
    }
`

function Posted() {
  const [data , setData] = useState([])
  const [user, setUser] = useState([])
  // const [date, setDate] = useState([])

  useEffect (() => {
    getData('posts').then(response => setData(response))
    getData('register').then(response => setUser(response))
    // setDate(data.user_timestamps)
  },[])

  return (
    <>
        <H1>Party You've Posted</H1>
        <PostList>
          {data.map((item, index) => (
            <div key={index}>
              {user.filter(postUserId => postUserId.user_id === item.user_id).map((userItem, userIndex) => (
                <Link key={userIndex} to={`Details/${item.post_id}`}>
                  <Content src={item.title} title={item.title} user={userItem.username} date={item.date} party={item.party_size}></Content>
                </Link>
              ))}
            </div>
          ))}
        </PostList>
    </>
  )
}
export default withHelmet('PartyGames')(Posted)