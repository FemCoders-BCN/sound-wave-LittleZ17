import { Box, Typography, CardMedia } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'


const Header = () => {
  return (
    <Container
      direction='row'
      sx={{
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
          // justifyItems:'start',
          // justifyContent: 'center',

        }}
      >

        <CardMedia
          component="img"
          sx={{
            width: { sm: '20vw', lg: '5vw' },
            // display: {
            //     xs: 'none', sm: 'block', lg: 'block',
            // },
          }}
          image={logo}
          alt="Logo"
        />
      <Link to='/'><Typography fontSize='1.25rem' fontFamily='Poppins, sans-serif'>Soundwave</Typography></Link>
      </Box>

      <Box
        direction='row'
        sx={{
          width: '20%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to='/discover'><Typography fontSize='1rem' fontFamily='Poppins, sans-serif'>Discover</Typography></Link>
        <Link to='/join'><Typography fontSize='1rem' fontFamily='Poppins, sans-serif'>Join</Typography></Link>
      </Box>
    </Container>
  )
}

export default Header