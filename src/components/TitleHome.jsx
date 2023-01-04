import { Typography, Card, CardContent } from "@mui/material"
import BtnHome from './Button'




const TitleHome = () => {
    return (
        <Card sx={{
            boxShadow: '0',
            backgroundColor:'#2F303A',
        }}>
            <CardContent
                sx={{
                    padding: '180px 16px'
                }}
            >
                <Typography fontSize='50px' fontWeight='500'>
                    Feel the Music
                </Typography>
                <Typography fontSize='21px' fontWeight='500' component="p" padding='20px 0'>
                    Stream over 20 thousand songs
                    with one click
                </Typography>
                <BtnHome/>
            </CardContent>
        </Card>
    );
}

export default TitleHome