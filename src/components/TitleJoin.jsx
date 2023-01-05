import { Typography, Box, TextField, InputAdornment, OutlinedInput } from "@mui/material"
import { Container } from "@mui/system"
import BtnHome from "./Button"



const TitleJoin = () => {


    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
        }}>
            <Container
            sx={{
                margin:'15px 0',
            }}
            >
                <Typography
                    variant={'h2'}
                    gutterBottom={true}
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '700',
                    }}
                >Join the <span
                    sx={{
                        fontcolor: '#D60679',

                    }}
                >fun.</span></Typography>
            </Container>
            <Box
                // component="form"
                sx={{
                    alignSelf: 'center',
                    margin: '0',
                    // marginBottom: '10%',
                    background: '#202027',
                    borderRadius: '15px',
                    padding: '5% 10%',
                    width: '320px',

                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',

                }}
            >
                <Typography component={'p'}
                    sx={{
                        margin: '15px 0',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '700',
                    }}
                >Name:</Typography>
                <TextField
                    sx={{
                        border: '2px solid #2E3852',
                        borderRadius: '5px',
                        height: ''
                    }}
                />
                <Typography sx={{
                    margin: '15px 0',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                }}>Email:</Typography>
                <TextField sx={{
                    border: '2px solid #2E3852',
                    borderRadius: '5px'
                }} />
                <Typography sx={{
                    margin: '15px 0',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                }}>Password:</Typography>
                <TextField sx={{
                    border: '2px solid #2E3852',
                    borderRadius: '5px',
                }} />
                <BtnHome />
            </Box>
        </Container >
    )
}

export default TitleJoin