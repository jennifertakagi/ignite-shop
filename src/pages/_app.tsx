import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from "../assets/logo.png"
import { Container, Header } from "../styles/pages/app"

import Image from "next/image"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" width={80}/>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
