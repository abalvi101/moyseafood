import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: roboto;
        src: url('/fonts/roboto/Roboto-Regular.ttf')
    }
    
    * {
        font-family: roboto;
        box-sizing: border-box;
    }
`

export default GlobalStyles;