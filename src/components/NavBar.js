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
  transition: background-color .5s
`
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem;
`

const Logo = styled.div``

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
        <Logo>Logo</Logo>
        <ActionContainer>
          <Action>
            <Link to='/'>Home</Link>
          </Action>
          <Action>
            <Link to='/login'>login</Link>
          </Action>
          <Action>
            <Link to='/about'>About</Link>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
