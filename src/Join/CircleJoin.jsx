import { Box } from "@mui/material"


const CircleJoin = () => {
    return (
        <>
            <Box
                sx={{
                    width: { xs: 115, sm: 420 },
                    height: { xs: 115, sm: 420 },
                    borderRadius: '50%',
                    zIndex: { xs: 1, sm: 1 },
                    position: { xs: 'absolute', sm: 'absolute' },
                    backgroundColor: '#BC3A8030',
                    left: { xs: '8%', sm: '-7%' },
                    bottom: { xs: '5%', sm: '5%' }

                }}>

            </Box>

            <Box
                sx={{
                    width: { xs: 115, sm: 420 },
                    height: { xs: 115, sm: 420 },
                    borderRadius: '50%',
                    zIndex: { xs: 1, sm: 1 },
                    position: { xs: 'absolute', sm: 'absolute' },
                    backgroundColor: '#303046',
                    top: '120px',
                    left: { xs: '15%', sm: '25%' },
                    bottom: { xs: '5%', sm: '35%' }
                }}>
            </Box>
        </>


    )
}

export default CircleJoin