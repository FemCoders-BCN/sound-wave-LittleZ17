import { Box } from "@mui/material"


const CircleHome = () => {
    return (
        <>
            <Box
                sx={{
                    width:{xs: 115, sm:420},
                    height:{xs: 115, sm:420},
                    borderRadius: '50%',
                    zIndex: {xs: 1, sm:1},
                    position: {xs:'absolute', sm: 'absolute'},
                    backgroundColor: '#BC3A8030',
                    left:{xs: '8%', sm:'-7%'},
                    bottom: {xs: '5%', sm:'5%'}
                }}></Box>

            <Box
                sx={{
                    width:{xs: 115, sm:420},
                    height:{xs: 115, sm:420},
                    borderRadius: '50%',
                    zIndex: {xs: 1, sm:1},
                    position: {xs:'absolute', sm: 'absolute'},
                    backgroundColor: '#303046',
                    left:{xs: '15%', sm:'25%'},
                    bottom: {xs: '75%', sm:'35%' }
                }}></Box>
                <Box
                sx={{
                    width:{xs: 150, sm:400},
                    height:{xs: 130, sm:400},
                    borderRadius: '500px 100px 0 0',
                    zIndex: 1,
                    position: 'absolute',
                    backgroundColor: '#303046',
                    right:{xs: '0%', sm:'-25%'},
                    bottom: {xs: '0%', sm:'-20%' }
                }}></Box>
        </>


    )
}

export default CircleHome