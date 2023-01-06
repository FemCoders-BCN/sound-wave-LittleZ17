import { Container } from "@mui/material"
import Header from '../components/Header'
import Footer from "../components/Footer"
import TitleDiscover from "./TitleDiscover"

const Discover = () => {
  return (
    <Container 
    sx={{
      margin:'0',
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh',
      padding:{xs:'0', sm:'0', lg:'0'}
    }}>
      <Header />
      <TitleDiscover />
      <Footer />
    </Container>
  )
}

export default Discover
