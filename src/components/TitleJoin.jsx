import { Typography, Box, TextField } from "@mui/material"
import BtnHome from "./Button"
import { makeStyles } from "@mui/styles"


const useStyles = makeStyles({
    text: {
        fontSize: '17.2px',
        fontWeight: '700',

    },
    title: {
        fontSize: '61px',
        fontWeight: '700',
    }
});

const TitleJoin = () => {

    const classes = useStyles();

    return (
        <Box
        >
            <Typography  classes={classes.title}>Join the fun.</Typography>
            <Box
                component="form">
                <Typography className={classes.text}>Name:</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Typography className={classes.text}>Email:</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Typography className={classes.text}>Password:</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <BtnHome/>
            </Box>
        </Box>
    )
}

export default TitleJoin