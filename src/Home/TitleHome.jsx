import { Typography, Container, CardMedia } from "@mui/material"
import BtnHome from '../components/Button'
import { Box } from '@mui/material'
import imgHome from '../assets/images/landing-page-girl.png'

const TitleHome = () => {


    return (

        <Container
            sx={{
                position: { xs: 'relative', sm: 'relative' },
                zIndex: { xs: '2', sm: '2' },
                width: '100%',
                boxShadow: '0',
                display: 'flex',
                justifyContent: { sm: 'row' },
                alignItems: 'center',


            }}>

            <CardMedia
                component="img"
                sx={{
                    backgroundColor: 'transparent',
                    zIndex: { xs: '2', sm: '2' },
                    width: { sm: '50%' },
                    height: { sm: '10%' },
                    display: { xs: 'none', sm: 'block', lg: 'block' },
                }}
                image={imgHome}
                alt="Lady listen music"
            />

            <Box
                sx={{
                    padding: {
                        xs: '50% 0', sm: '0 5%', lg: '0',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    backgroundColor: 'transparent',
                    zIndex: { xs: '2', sm: '2' },
                }} >
                <Typography
                    fontFamily='Poppins, sans-serif'
                    fontSize='3.125rem'
                    fontWeight='400' >Feel the Music
                </Typography>

                <Typography
                    fontFamily='Poppins, sans-serif'
                    fontSize='1.2rem'
                    fontWeight='400'
                    padding='20px 0' >Stream over 20 thousand songs with one click
                </Typography>

                <BtnHome />
            </Box>

        </Container>
    );
}

export default TitleHome