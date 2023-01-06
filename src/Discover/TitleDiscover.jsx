import { Typography, Box, CardMedia } from '@mui/material'
import { Container } from "@mui/system"
import BoxIcons from '../components/BoxIcons'
import covers from '../assets/images/covers.jpg'

import React from 'react'

const TitleDiscover = () => {
    return (
        <Container 
        sx={{
            padding: '0 5%',
            marginTop:{xs:'0', sm:'10%', lg:'0'},
            display:'flex',
            flexDirection:{xs:'column', sm:'row', lg:'row'},
        }} >
            <Box>

                <Typography
                    fontFamily={'Poppins, sans-serif'}
                    fontSize={'3.125rem'}
                    sx={{ margin: '5% 0' }}>Discover new
                    music
                </Typography>

                <BoxIcons />

                <Box sx={{ padding: '5% 0' }} >
                    <Typography
                        variant={'p'}
                        fontFamily={'Poppins, sans-serif'}
                        fontSize={'1.094rem'}
                        fontWeight={'300'} >By joining you can benefit by listening to
                        the latest albums released.
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <CardMedia
                    component="img"
                    sx={{
                        width: '90%',
                        alignSelf: 'center',
                        marginBottom: '5%',
                    }}
                    image={covers}
                    alt="Live from space album cover"
                />

            </Box>
        </Container>
    )
}

export default TitleDiscover