import React from 'react'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    root: {
        fontSize: '17.2px',
        fontWeight: '700',
    },
    bg: {
        backgroundColor: '#2F303A'
    }
});

const Footer = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    return (


        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems:'center'
            }}
        >
            <BottomNavigation
                sx={{
                    backgroundColor: '#2F303A',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                showLabels
            >
                <BottomNavigationAction className={classes.root} label="About Us" />
                <BottomNavigationAction className={classes.root} label="Contact" />
            </BottomNavigation>
            <BottomNavigation

                sx={{ backgroundColor: '#2F303A' }}
                showLabels
            >
                <BottomNavigationAction className={classes.root} label="Twitter" icon={<TwitterIcon />} />
                <BottomNavigationAction className={classes.root} label="Facebook" icon={<FacebookIcon />} />
            </BottomNavigation>
        </Box>

        // <BottomNavigation sx={{
        //     backgroundColor:'#2F303A',
        // }}>
        //     <BottomNavigationAction label='Twitter' icon={< TwitterIcon />} />
        //     <BottomNavigationAction label='Facebook' icon={<FacebookIcon />} />
        //     {/* <Typography>Twitter</Typography>
        //     <Typography>Facebook</Typography> */}
        // </BottomNavigation>
    )
}

export default Footer