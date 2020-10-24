import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useScroll from '../util/useScroll'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10000;
  background-color: ${props => props.isScroll ? '#090d20' : 'transparent'};
  color: ${props => props.isScroll ? '#fff' : '#fff'};
  transition: background-color .5s;
`
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 1.5rem;
`

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const Action = styled.li`
   padding: 0 1rem;
`

function NavBar () {
  const isScroll = useScroll({ scrollRange: 20 })

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo><Link to='/'>Party Games</Link></Logo>
        <ActionContainer>
          <Action>
            <Link to='/'>Home</Link>
          </Action>
          <Action>
            <Link to='/Post'>Post</Link>
          </Action>
          {/* <Action>
            <Link to='/Details'>Details</Link>
          </Action> */}
          <Action>
            <Link to='/Accepted'>Accepted</Link>
          </Action>
          <Action>
            <Link to='/Posted'>Posted</Link>
          </Action>
          <Action>
            <Link to='/login'>Login</Link>
          </Action>
          <Action>
            <Link to='/Register'>Register</Link>
          </Action>
          <Action>
            <Link to='/Profile'>Profile</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
