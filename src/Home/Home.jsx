import Header from "../components/Header"
import Title from '../components/TitleHome'
import { useState, useEffect } from "react";
import { Container } from "@mui/system";


const Home = () => {

  const [windowW, setwindoW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwindoW(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <Container>
      <Header />
      <Title />
      {/* <Typography variant="h6">{windowW}</Typography> */}
    </Container>
  )
}

export default Home