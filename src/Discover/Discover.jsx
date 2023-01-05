import { Container } from "@mui/material"
import Header from '../components/Header'
import Footer from "../components/Footer"
import TitleDiscover from "../components/TitleDiscover"

const Discover = () => {
  return (
    <Container 
    sx={{
      display:'flex',
      flexDirection:'column',
      minHeight:'100vh',
      padding:'0'
    }}>
      <Header />
      <TitleDiscover />
      <Footer />
    </Container>
  )
}

export default Discover
