import Header from '../components/Header'
import Title from './TitleHome'
import { Container } from "@mui/system";
import CircleHome from './CircleHome';


const Home = () => {

  return (
    <Container>
      <CircleHome />
      <Header />
      <Title />
    </Container>
  )
}

export default Home