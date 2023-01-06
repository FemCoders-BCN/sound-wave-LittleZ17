import { Typography, Box, TextField, InputAdornment, OutlinedInput } from "@mui/material"
import { Container } from "@mui/system"
import BtnHome from "./Button"



const TitleJoin = () => {
    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'center',
            padding:'0 8%'
            
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
                        // margin: '15px 0',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '700',
                        fontSize:'1.075rem',
                    }}>Name:</Typography>
                <TextField
                    sx={{
                        border: '2px solid #2E3852',
                        borderRadius: '5px',
                        marginBottom:'10%',
                    }}
                />
                <Typography sx={{
                    // margin: '15px 0',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    fontSize:'1.075rem',
                }}>Email:</Typography>
                <TextField sx={{
                    border: '2px solid #2E3852',
                    borderRadius: '5px',
                    marginBottom:'10%',
                }} />
                <Typography sx={{
                    // margin: '15px 0',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    fontSize:'1.075rem',
                }}>Password:</Typography>
                <TextField sx={{
                    border: '2px solid #2E3852',
                    borderRadius: '5px',
                    marginBottom:'10%'
                }} />
                <BtnHome />
            </Box>
        </Container >
    )
}

export default TitleJoin