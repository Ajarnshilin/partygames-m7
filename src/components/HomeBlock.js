import React from 'react'
import styled from 'styled-components'

const BackgroundImage = styled.div`
  height: 100vh;
  width: auto;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;

  position: relative;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

function BackgroundBlock ({ src, height = 100, children }) {
  return (
    <BackgroundImage src={src} height={height}>
      <BackgroundOverlay>
        {children}
      </BackgroundOverlay>
    </BackgroundImage>
  )
}

export default BackgroundBlock
