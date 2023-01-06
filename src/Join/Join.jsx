import { Container, Typography } from "@mui/material"

import Footer from "../components/Footer"
import Header from "../components/Header"
import TitleJoin from "../components/TitleJoin"

const Join = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '0'
      }}>
      <Header />
      <TitleJoin />
      <Footer />
    </Container>
  )
}

export default Join
