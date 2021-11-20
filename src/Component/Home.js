import { Box, Typography, Toolbar, IconButton, MenuIcon, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">This is home screen</Typography>
            <Box style={{display: 'flex'}}>
                
            </Box>
        </Box>
    )
}

export default Home;