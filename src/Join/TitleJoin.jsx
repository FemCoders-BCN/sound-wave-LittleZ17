import { Typography, Box, TextField } from "@mui/material"
import { Container } from "@mui/system"
import BtnHome from "../components/Button"



const TitleJoin = () => {
    return (
        <Container sx={{
            position: 'relative',
            zIndex: { xs: '2', sm: '2' },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', lg: 'row' },
            alignItems: 'center',
            placeContent: 'center',
            padding: '5% 8%'
        }}>
            <Container
                sx={{
                    margin: '15px 0',
                    zIndex: { xs: '2', sm: '2' },

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
                >fun.</span>
                </Typography>
            </Container>

            <Box
                sx={{
                    alignSelf: 'center',
                    margin: '0',
                    background: '#202027',
                    borderRadius: '15px',
                    padding: '2% 10%',
                    width: { xs: '95%', sm: '80%' },

                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: { xs: 'column', sm: 'column' },
                }}
            >
                <Typography component={'p'}
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '700',
                        fontSize: '1.075rem',
                    }}>Name:</Typography>
                <TextField
                    sx={{
                        border: '2px solid #2E3852',
                        borderRadius: '5px',
                        marginBottom: '10%',
                    }}
                />
                <Typography sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    fontSize: '1.075rem',
                }}>Email:</Typography>
                <TextField sx={{
                    border: '2px solid #2E3852',
                    borderRadius: '5px',
                    marginBottom: '10%',
                }} />
                <Typography sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: '700',
                    fontSize: '1.075rem',
                }}>Password:</Typography>
                <TextField sx={{
                    border: '2px solid #2E3852',
                    borderRadius: '5px',
                    marginBottom: '10%'
                }} />
                <BtnHome />
            </Box>
        </Container >
    )
}

export default TitleJoin