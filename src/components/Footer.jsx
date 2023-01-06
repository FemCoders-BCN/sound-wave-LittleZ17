import React from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                label: {
                    fontFamily: 'Poppins, sans-serif',
                    fontSize:'1rem',
                    fontWeight:'600',
                },
            },
        },
    },
})


const Footer = () => {


    return (
        

        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position:'relative',
                    zIndex:'3',
                    background: '#202027',
                    width: { xs: '100vw', sm: '100vw', lg: '100vw' },
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 'auto',
                }}
            >
                <BottomNavigation
                    sx={{
                        backgroundColor: '#202027',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="About Us" />
                    <BottomNavigationAction label="Contact" />
                </BottomNavigation>
                <BottomNavigation

                    sx={{ backgroundColor: '#202027' }}
                    showLabels
                >
                    <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
                    <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
                </BottomNavigation>
            </Box>
        </ThemeProvider>
    )
}

export default Footer