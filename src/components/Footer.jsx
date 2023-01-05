import React from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';



const Footer = () => {

    return (
        <Box
            sx={{
                background:'#202027',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems:'center',
                marginTop:'auto'
            }}
        >
            <BottomNavigation
                sx={{
                    backgroundColor: '#202027',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                showLabels
            >
                <BottomNavigationAction label="About Us" />
                <BottomNavigationAction  label="Contact" />
            </BottomNavigation>
            <BottomNavigation

                sx={{ backgroundColor: '#202027' }}
                showLabels
            >
                <BottomNavigationAction  label="Twitter" icon={<TwitterIcon />} />
                <BottomNavigationAction  label="Facebook" icon={<FacebookIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default Footer