import { Typography, Box } from '@mui/material'
import { Container } from "@mui/system"
import BoxIcons from './BoxIcons'
import covers from '../assets/images/covers.jpg'

import React from 'react'

const TitleDiscover = () => {
    return (
        <Container sx={{ padding: '0 5%' }} >
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

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '5%'
                }}>
                <img src={covers} alt="imagen del album" />
            </Box>

        </Container>
    )
}

export default TitleDiscover