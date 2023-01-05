import { Box} from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Header = () => {
  return (
    <Container
      direction='row'
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        margin: '5% 0',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '50vw'
        }}
      >
        <img className='logo' src={logo} alt="Logo" />
        <Link to='/' fontSize='20px' margin='20px 0' >Soundwave</Link>
      </Box>

      <Box
        direction='row'
        sx={{
          width: '50%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Link to='/discover' fontSize='16px'>Discover</Link>
        <Link to='/join' fontSize='16px'>Join</Link>
      </Box>
    </Container>
  )
}

export default Header