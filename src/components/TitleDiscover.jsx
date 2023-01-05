import { Typography, Box } from '@mui/material'
import { Container } from "@mui/system"
import BoxIcons from './BoxIcons'
import covers from '../assets/images/covers.jpg'

import React from 'react'

const TitleDiscover = () => {
    return (
        <Container
            sx={{
                padding: '5%'
            }}>
            <Typography
                variant={'h3'}
                gutterBottom={true}
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    margin: '10% 0'
                }}>Discover new
                music</Typography>
            <BoxIcons />
            <Box
                sx={{
                    margin: '10% 0',
                }}>
                <Typography
                    variant={'p'}
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                    }}>By joining you can benefit by listening to
                    the latest albums released.</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <img className='cover' src={covers} alt="imagen del album" />
            </Box>

        </Container>
    )
}

export default TitleDiscover