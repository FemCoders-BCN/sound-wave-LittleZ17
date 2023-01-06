import { Container} from "@mui/material"

import Footer from "../components/Footer"
import Header from "../components/Header"
import TitleJoin from "./TitleJoin"
import CircleJoin from "./CircleJoin"

const Join = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding:{xs:'0', sm:'0', lg:'0'}
      }}>
      <CircleJoin />
      <Header />
      <TitleJoin />
      <Footer />
    </Container>
  )
}

export default Join
