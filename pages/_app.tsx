import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
  }

  * {
    font-family: 'Montserrat', sans-serif;
    transition: ease-in-out .3s,
  }
  
  img {
    max-width: 100%;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
