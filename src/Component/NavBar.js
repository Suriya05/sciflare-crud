import { Box, Typography, Toolbar, IconButton, MenuIcon, AppBar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';

const isLoggedin = JSON.parse(localStorage.getItem('loggedin'));

const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    properties: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

const NavBar = () => {
    const classes = useStyle();
    function logoutLocal() {
        return(
          localStorage.removeItem("loggedin"),
          window.location.reload()
        )
        }
   
    return (
         <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
           <Toolbar>
           {isLoggedin ? '': <NavLink className={classes.properties} to="/register" exact>Register</NavLink>}
           {isLoggedin ? '': <NavLink className={classes.properties} to="/login" exact>Login</NavLink>}
           {isLoggedin ? <NavLink className={classes.properties} to="/" exact>Home</NavLink>:''}
                {isLoggedin ? <NavLink className={classes.properties} to="/all" exact>Users</NavLink>:''}
                {isLoggedin?<a  onClick={logoutLocal}>Log out</a>:''}
           </Toolbar>
         </AppBar>
       </Box>
    )
}

export default NavBar;