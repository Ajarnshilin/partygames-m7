import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useScroll from '../util/useScroll'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie';
import animationData from '../lotties/party';

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
  display:flex;
  justify-content: center;
  align-items: center;
  div{
    position: relative;
    /* bottom: 35px; */
  }
`

const ActionContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`

const Action = styled.li`
   padding: 0 1rem;
`

const Button = styled.button`
  background-color: #57A4CC;
  padding: 10px 25px;
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #1E3859;
  }
`

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

function NavBar() {
  const isScroll = useScroll({ scrollRange: 20 })

  return (
    <Container isScroll={isScroll}>
      <Wrapper>
        <Logo><Lottie
          options={defaultOptions}
          height={50}
          width={50}
        /><Link to='/'>Party Games</Link></Logo>

        <ActionContainer>
          <Action>
            <Link to='/'>Home</Link>
          </Action>
          {/* <Action>
            <Link to='/Details'>Details</Link>
          </Action> */}
          <Action>
            <Link to='/Profile'>Profile</Link>
          </Action>
          <Action>
            <Button><Link to='/login'>Login</Link></Button>
          </Action>
        </ActionContainer>
      </Wrapper>
    </Container>
  )
}

export default NavBar
