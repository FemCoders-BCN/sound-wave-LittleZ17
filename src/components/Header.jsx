import { Box, Typography, CardMedia } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Header = () => {
  return (
    <Container
      direction='row'
      sx={{
        position: 'relative',
        zIndex: '2',
        padding: '5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

      }}>
      <Box
        alignContent={'space-between'}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>

        <CardMedia
          component="img"
          sx={{
            width: { sm: '5vw', lg: '8vw' }
          }}
          image={logo}
          alt="Logo"
        />

        <Link to='/'>
          <Typography
            fontFamily='Poppins, sans-serif'
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              margin: '0 10%'
            }}
          >Soundwave
          </Typography>
        </Link>
      </Box>

      <Box
        sx={{
          width: { xs: '30vw', sm: '20vw', lg: '15vw' },
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Link to='/discover'>
          <Typography
            fontFamily='Poppins, sans-serif'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >Discover
          </Typography>
        </Link>
        <Link to='/join'>
          <Typography
            fontFamily='Poppins, sans-serif'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}>Join
          </Typography>
        </Link>
      </Box>
    </Container>
  )
}

export default Header