import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
 ${reset}

 html, body, #root {
   height: 100vh;
   width: 100vw;
   overflow-x: hidden;

   font-family: 'Roboto', sans-serif;
   font-size: 20px;

   scroll-behavior: smooth;

   background-color: #0C1737;
 }

 a {
  text-decoration: none;
  color: inherit;
   &:visited{
     color: inherit;
   }
 }
 `
export default GlobalStyle
